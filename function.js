// Question database
const pictureQuestions = {
  1: { q: " ", img: "images/image1.jpg", a: "वेनिस, नहरों का शहर " },
  2: { q: "", img: "images/image2.jpg", a: "मीरकैट, अफ्रीका  " },
  3: { q: "", img: "images/image3.jpg", a: "तंजाउर, चोल राजवंश " },
  4: { q: "", img: "images/image4.jpg", a: "   क्राइस्ट द रिडीमर, रियो द जेनेरियो (ब्राज़ील)  " },
  5: { q: "", img: "images/image5.jpg", a: " राजा रवि वर्मा, शकुंतला  " },
  6: { q: "", img: "images/image6.jpg", a: "शा' कैरी रिचर्डसन, ट्रैक एंड फील्ड स्प्रिंटर " },
  7: { q: "", img: "images/image7.jpg", a: " मित्सुबिसी मोटर, जापान" },
  8: { q: "", img: "images/image8.jpg", a: "  जैक,  ऑगी एंड कॉकरोच  " },
  9: { q: "", img: "images/image9.jpg", a: "मार्क कार्नी,  कनाडा प्रधानमंत्री " },
  10:{ q: "", img: "images/image10.jpg", a: " सुबिका चित्र शैली, मणिपुर" },
  11:{ q: "", img: "images/image11.jpg", a: " अंकोरवाट मंदिर, कंबोडिया " },
  12:{ q: "", img: "images/image12.jpg", a: "शंघाई सहयोग संगठन 2025(SCO Summit -2025), तियानजिन " },
  13:{ q: "", img: "images/image13.jpg", a: "ओरिएंटल पर्ल टीवी टावर, शंघाई " },
  14:{ q: "", img: "images/14imgg.jpg", a: "ओटोस्कोप (Otoscope), कान की जांच" },
  15:{ q: "", img: "images/image15.jpg", a: " तुर्की, अंकारा" },
  16:{ q: "", img: "images/image16.jpg", a: "क्रोसेंट, फ्रांस" }
};

let currentQuestion = null;

// Open Question
function openQuestion(num, btn) {
  currentQuestion = num;

  // Fade button once clicked
  btn.classList.add("clicked");

  // Show quiz page
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");

  const q = pictureQuestions[num];
  document.getElementById("questionText").innerText = q.q;
  document.getElementById("questionImage").src = q.img;
  document.getElementById("answerText").classList.add("hidden");
  document.getElementById("answerText").innerText = q.a;
}

// Show Answer
function showAnswer() {
  document.getElementById("answerText").classList.remove("hidden");
}

// Go Back
function goBack() {
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}
