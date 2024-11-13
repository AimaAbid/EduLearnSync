import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Exam.css";
import axios from "axios";

// import Footer from "../../pages/Footer";
// import icon1 from "../../assets/icon1.png";
// import iconThree from "../../assets/icon1of3.png";

export default function ExamTest() {
	// const { moduleId } = useParams();
	const [questions, setQuestions] = useState([]);
	const [selectedAnswer, setSelectedAnswer] = useState({});
	const [feedback, setFeedback] = useState({});
	const [score, setScore] = useState(null);
    const [passed, setPassed] = useState(false);
	var userId = localStorage.getItem("userId");

	useEffect(() => {
		axios
			.get(`http://localhost:8000/quiz/5`)
			.then((response) => {
				setQuestions(response.data);
			})
			.catch((error) => {
				console.error("Error fetching quiz data:", error);
			});
	}, []); //put moduleId here

	const handleAnswer = async (questionId) => {
		console.log("questionId" + questionId);

		const answer = selectedAnswer[questionId];
		console.log("answer" + answer);
		try {
			await axios.post("http://localhost:8000/quiz/final-exam/answers", {
				userId,
				questionId,
				selectedAnswer: answer,
			});
		} catch (error) {
			console.error("Error submitting answer:", error);
		}
	};
	async function submitAnswers() {
		var response = await axios.get(
			"http://localhost:8000/quiz/exam-score/" + userId
		);
		const percentage = (response.data.score / 20) * 100;
		setScore(percentage);
        setPassed(response.data.passed);
	}

	return (
		<div className="course-container">
			<div className="course-header">
				<div className="header-items"></div>
				<div className="header-items">Course Details</div>
				<div className="header-items">
					<Link to="/course-list">Go Back</Link>
				</div>
			</div>

			<div className="exam-wrapper">
				<Link to="/course/1"> Back</Link>
				<h2 className="bold text-center">Course Exam</h2>

				<h3>Welcome to the Cyber Security Self-Paced Final Exam.</h3>
				<p>
					There are 20 questions in total. You must achieve<b> 70% </b>to pass
					this exam.
				</p>
				<p>Items on this exam support the following networking skills.</p>
				<ul>
					<li>
						<i class="fa fa-check all-icons icon-style" aria-hidden="true"></i>
						Explain the importance of methodological Cyber Security and
						penetration testing.
					</li>
					<li>
						{" "}
						<i class="fa fa-check all-icons icon-style" aria-hidden="true"></i>
						Explain how to exploit application-based vulnerabilities.
					</li>
					<li>
						<i class="fa fa-check all-icons icon-style" aria-hidden="true"></i>{" "}
						Explain how to perform post exploitation activities.
					</li>
					<li>
						{" "}
						<i class="fa fa-check all-icons icon-style" aria-hidden="true"></i>
						Explain how to perform post exploitation activities.
					</li>
					<li>
						{" "}
						<i
							class="fa fa-check all-icons icon-style"
							aria-hidden="true"
						></i>{" "}
						Explain the importance of methodological Cyber Security and
						penetration testing.
					</li>
				</ul>

				<div>
					{questions.map((q) => (
						<div className="card question-card" key={q.id}>
							<p className="question-heading">
								<strong>{q.question}</strong>
							</p>
							{Object.keys(q.options).map((optionKey) => (
								<div key={optionKey}>
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											id="defaultCheck1"
											value={optionKey}
											name={q.i}
											onChange={() =>
												setSelectedAnswer({
													...selectedAnswer,
													[q._id]: optionKey,
												})
											}
										/>
										<label class="form-check-label" for="defaultCheck1">
											<strong>{optionKey}:</strong> {q.options[optionKey]}
										</label>
									</div>
								</div>
							))}
							<br />
							<button
								className="btn btn-success"
								onClick={() => handleAnswer(q._id)}
							>
								Submit
							</button>
							{/* {feedback[q._id] && (
								<div className="card card-feedback answerFeedback">
									{feedback[q._id].correct ? "Correct!" : "Wrong!"} Points:{" "}
									{feedback[q._id].points}
								</div>
							)} */}
						</div>
					))}
					<button className="btn btn-success" onClick={submitAnswers}>
						Submit Answers
					</button>
                    {score!==null &&(score>=70)&&(<p>You Passed!</p>)}
                    {score!==null &&(score<70)&&(<p>Please Try Again. Never Back Down!</p>)}
					{score !== null && (
						<div className="score">
							<h2>Your Score:</h2>
							<div className="progress-bar">
								<div
									className="progress-bar-fill"
									style={{ width: `${score}%` }}
								>
									{score.toFixed(2)}%
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			{/* <footer/> */}
		</div>
	);
}
