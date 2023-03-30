//Default V2 Theme
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function() {
  const surveyJson = {
    pages: [{ 
  elements: [{
      name: "safety-satisfaction-score",
      title: "How would you describe your experience with our safety product?",
      type: "classgroup",
      choices: [
          { value: 5, text: "Fully satisfying" },
          { value: 4, text: "Generally satisfying" },
          { value: 3, text: "Neutral" },
          { value: 2, text: "Rather unsatisfying" },
          { value: 1, text: "Not satisfying at all" }
      ],
      isRequired: true
  }]
}, {
  elements: [{
      name: "what-would-make-you-feel-safe",
      title: "What can we do to make your experience feel more safe?",
      type: "comment",
  }, {
      name: "nps-score",
      title: "On a scale of zero to ten, how likely are you to recommend our safety product to a friend or colleague?",
      type: "rating",
      rateMin: 0,
      rateMax: 10
  }],
}, {
}, {
  elements: [{
      name: "disappointing-experience",
      title: "Please let us know why you had such a disappointing experience with our product",
      type: "comment"
  }],
  elements: [{
    name: "what-would-make-you-happy",
    title: "What can we do to add more happieness to your overall safety product customer experience?",
    type: "comment",
}, {
    name: "nps-score",
    title: "On a scale of zero to ten, how willing are you to share your experience of our safety product on our websites review blog?",
    type: "rating",
    rateMin: 0,
    rateMax: 10
}],
}, {
elements: [{
    name: "how-can-we-expand",
    title: "In your opinion, how could we expand the use and adoption of our safety product?",
    type: "comment"
}],
}, {
elements: [{
    name: "disappointing-experience",
    title: "Please let us know why you had such a disappointing experience with our product",
    type: "comment"
}],
elements: [{
  name: "what-would-make-you-buy-again",
  title: "What can we do to make your experience feel more friendly and ease use?",
  type: "comment",
}, {
  name: "nps-score",
  title: "On a scale of zero to ten, how likely are you to buy our safety product again?",
  type: "rating",
  rateMin: 0,
  rateMax: 10
}],
}, {
elements: [{
  name: "how-can-we-increase-lifecycle",
  title: "In your opinion, how could we increase our safety product's lifecyclye?",
  type: "comment"
}],
}, { 
elements:[{
  name: "user-experience",
  title: "Please let us know why you choose us and our product?",
  type: "comment"
}], 
}, {
  elements:[{
    name: "user-experience",
    title: "Please let us know why you would continue to choose us and our safety brand?",
    type: "comment"
  }], 
}, {
elements: [{
  name: "Color Choices",
  title: "Please tell us know which colour product you choose from us",
  choices: ["Red", "Blue", "Green", "Purple"]
}]} ]};

const survey = new Model(surveyJson);
return <Survey model={survey} />; }
