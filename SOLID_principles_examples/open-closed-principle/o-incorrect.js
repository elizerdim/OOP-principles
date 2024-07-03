// Adding a question with type "range" would require modification on printQuiz,
// which goes against the closed principle

// printQuiz function should be broken down into smaller components so that
// it doesn't need to know about the internals of questions

// This problem can be solved with polymorphism

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: ___________");
        break;
      // added case
      case "range":
        console.log("Minimum: ___________");
        console.log("Maximum: ___________");
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "This video is useful",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS feature",
  },
  // added question
  {
    type: "range",
    description: "What is the speed limit in your city?",
  },
];

printQuiz(questions);
