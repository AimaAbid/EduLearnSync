var express = require("express");
var Router = express.Router();
var user = require("../models/user");
var question = require("../models/question");
var userprogress = require("../models/userprogress");



// Endpoint to get the leaderboard
Router.get('/leaderboard', async (req, res) => {
    try {
        // Fetch top users by points
        const topUsers = await userprogress.aggregate([
            { $sort: { points: -1 } }, // Sort by points descending
            { $limit: 10 }, // Limit to top 10 users
            {
                $lookup: {
                    from: 'users', // Collection name for User model
                    localField: 'userId', // Field in userprogress
                    foreignField: '_id', // Field in User model
                    as: 'userDetails'
                }
            },
            { $unwind: '$userDetails' }, // Flatten the array
            {
                $project: {
                    _id: 0, // Exclude _id from the result
                    points: 1,
                    'userDetails.name': 1 // Include user's name from userDetails
                }
            }
        ]);

        res.json(topUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the leaderboard' });
    }
});




// Submit an answer

Router.post("/answers", async (req, res) => {
	try {
		const { userId, questionId, selectedAnswer } = req.body;

		// Find the question from the database
		const foundQuestion = await question.findById(questionId);

		if (!foundQuestion) {
			return res.status(404).json({ error: "Question not found" });
		}

		// Find or create the user progress
		let foundUserprogress = await userprogress.findOne({ userId });

		if (!foundUserprogress) {
			foundUserprogress = new userprogress({ userId, points: 0, badges: [] });
		}

		// Check the answer
		if (foundQuestion.correctAnswer === selectedAnswer) {
			foundUserprogress.points += 10; // Example point increment

			// Check for badge criteria
			if (
				foundUserprogress.points >= 40 &&
				!foundUserprogress.badges.includes("Rookie")
			) {
				foundUserprogress.badges.push("Rookie");
			}
			if (
				foundUserprogress.points >= 80 &&
				!foundUserprogress.badges.includes("Traveller")
			) {
				foundUserprogress.badges.push("Traveller");
			}
			if (
				foundUserprogress.points >= 160 &&
				!foundUserprogress.badges.includes("Trail Blazer")
			) {
				foundUserprogress.badges.push("Trail Blazer");
			}

			if (
				foundUserprogress.points >= 120 &&
				!foundUserprogress.badges.includes("Adventurer")
			) {
				foundUserprogress.badges.push("Adventurer");
			}

			await foundUserprogress.save();

			res.json({ correct: true, insight:foundQuestion.insight });
		} else {
			res.json({ correct: false,insight:foundQuestion.insight });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}
});

// Get questions for a module
Router.get("/:moduleId", async (req, res) => {
	try {
		const moduleId = req.params.moduleId;
		const searchedQuestion = await question.find({ moduleId: moduleId });
		if (!searchedQuestion || searchedQuestion.length === 0) {
			return res
				.status(404)
				.json({ message: "No questions found for this module" });
		}
		res.status(200).json(searchedQuestion);
	} catch (error) {
		console.error("Error fetching question:", error.message);
		res
			.status(500)
			.json({ message: "Internal server error", error: error.message });
	}
});

// Get user points
Router.get("/points/:userId", async (req, res) => {
	const userId = req.params.userId;
	const searchedUserProgress = await userprogress.findOne({ userId });
	res.json({ points: searchedUserProgress ? searchedUserProgress.points : 0 });
});

// Get user badges
Router.get("/badges/:userId", async (req, res) => {
	const userId = req.params.userId;
	const searchedUserProgress = await userprogress.findOne({ userId });
	res.json({ badges: searchedUserProgress ? searchedUserProgress.badges : [] });
});

Router.get("/exam-score/:userId", async (req, res) => {
	const userId = req.params.userId;
	const searchedUserProgress = await userprogress.findOne({ userId });
	res.json({
		score: searchedUserProgress
			? searchedUserProgress.finalExamCorrectAnswers
			: 0,
		passed: searchedUserProgress.finalExamCorrectAnswers >= 14 ? true : false,
	});
});


// Endpoint to submit final exam answers
Router.post("/final-exam/answers", async (req, res) => {
	try {
		const { userId, questionId, selectedAnswer } = req.body;

		// Find the question from the database
		const foundQuestion = await question.findById(questionId);

		if (!foundQuestion) {
			return res.status(404).json({ error: "Question not found" });
		}

		// Find or create the user progress
		let foundUserProgress = await userprogress.findOne({ userId });

		if (!foundUserProgress) {
			foundUserProgress = new userprogress({ userId, points: 0, badges: [] });
		}

		// Check the answer
		if (foundQuestion.correctAnswer === selectedAnswer) {
			foundUserProgress.points += 10; // Example point increment

			// Track correct answers for the final exam
			const totalCorrectAnswers =
				foundUserProgress.finalExamCorrectAnswers || 0;
			foundUserProgress.finalExamCorrectAnswers =
				foundQuestion.correctAnswer === selectedAnswer
					? totalCorrectAnswers + 1
					: totalCorrectAnswers;

			// Award course completion badge if 17 or more answers are correct
			if (foundUserProgress.finalExamCorrectAnswers >= 14) {
				if (!foundUserProgress.badges.includes("Course Completion")) {
					foundUserProgress.badges.push("Course Completion");
				}
			}
		}

		await foundUserProgress.save();

		res.json({ points: foundUserProgress.finalExamCorrectAnswers });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}

	

});

module.exports = Router;
