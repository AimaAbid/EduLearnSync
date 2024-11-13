import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

export default function CourseSideBar() {
	return (
		<div>
			{" "}
			<div class="collapse" id="collapseExample">
				<div class="card ">
					<div className="row">
						<div className="col-md-4 course-sidebar">
							<div class="accordion" id="accordionExample">
								<div class="card">
									<div class="card-header" id="headingOne">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left"
												type="button"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												1.Module 1
											</button>
										</h2>
									</div>

									<div
										id="collapseOne"
										class="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordionExample"
									>
										<div>
											<div class="list-group list-group-flush">
												<Link
													to="/"
													class="list-group-item list-group-item-action list-group-item-info"
													aria-current="true"
												>
													1.1 SubModule 1.1
												</Link>
												<Link
													to="/"
													class="list-group-item list-group-item-action"
												>
													1.1.1
												</Link>
												<Link
													to="/"
													class="list-group-item list-group-item-action"
												>
													1.1.2
												</Link>
												<Link
													to="/"
													class="list-group-item list-group-item-action"
												>
													1.1.3
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingTwo">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												2.Module 2
											</button>
										</h2>
									</div>
									<div
										id="collapseTwo"
										class="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordionExample"
									>
										<div>
											<div>
												<div class="list-group list-group-flush">
													<Link
														to="/"
														class="list-group-item list-group-item-action list-group-item-info"
														aria-current="true"
													>
														The current link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A second link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A third link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A fourth link item
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingThree">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												3.Module 3
											</button>
										</h2>
									</div>
									<div
										id="collapseThree"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div>
											<div>
												<div class="list-group list-group-flush">
													<Link
														to="/"
														class="list-group-item list-group-item-action list-group-item-info"
														aria-current="true"
													>
														The current link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A second link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A third link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A fourth link item
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingFour">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseFour" //data target decides which will collapse it should be same as the id of next and id of current
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												4.Module 4
											</button>
										</h2>
									</div>
									<div
										id="collapseFour"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div>
											<div>
												<div class="list-group list-group-flush">
													<Link
														to="/"
														class="list-group-item list-group-item-action list-group-item-info"
														aria-current="true"
													>
														The current link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A second link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A third link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A fourth link item
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="card">
									<div class="card-header" id="headingFive">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												5.Module 5
											</button>
										</h2>
									</div>
									<div
										id="collapseFive"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div>
											<div>
												<div class="list-group list-group-flush">
													<Link
														to="/"
														class="list-group-item list-group-item-action list-group-item-info"
														aria-current="true"
													>
														The current link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A second link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A third link item
													</Link>
													<Link
														to="/"
														class="list-group-item list-group-item-action"
													>
														A fourth link item
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingSix">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseSix"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												AI Test
											</button>
										</h2>
									</div>
									<div
										id="collapseSix"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div class="card-body">
											And lastly, the placeholder content for the third and
											final accordion panel. This panel is hidden by default.
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingExam">
										<h2 class="mb-0">
											<button
												class="btn btn-link btn-block text-left collapsed"
												type="button"
												data-toggle="collapse"
												data-target="#collapseExam"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Final Exam
											</button>
										</h2>
									</div>
									<div
										id="collapseExam"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample"
									>
										<div class="card-body">
											And lastly, the placeholder content for the third and
											final accordion panel. This panel is hidden by default.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
