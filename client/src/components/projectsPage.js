import React from "react";

import Projects from "./projects"
import Welcome from "./welcome"
import "../public/styles/style.css";
import logo1 from '../public/images/FarmtoFork.png';
import logo2 from '../public/images/icon.png';

function ProjectsPage() {
  return (
      <div className="projectspage">
        <Welcome title="PROJECTS" size={{fontSize: "12vw"}}/>
        <Projects textTitle="Development of a web platform in relation to the DEMETER project, for product tracking, together with the research team of Network Engineering and Advanced Telecommunication Services belonging to the Department of Computer Systems at the Polytechnic University of Madrid." img={logo1} url="https://github.com/AnthonyRich13/TrFood" title="TrFood" text1="For the 6 months of internships carried out in the research team of Advanced Telecommunication Networks and Services
 a web platform was created using Nodejs, MongoDB, Passport and Express among other tools. This platform has the function of providing the possibility of tracking products and foodstuffs from their starting point to their subsequent sale. This starting point can be a farm, a factory or even another market, and the traceability will go through different stages, which will be recorded. This initiative follows the strategy called 'Farm to Fork', which is an important movement nowadays and is included in the European Green Pact, made by the European Commission." text2="The platform has different capabilities, such as the existence of authentication for the workers involved, the registration of products and shipments, as well as their geolocation through Mapbox and Leaflet, and their differentiation through unique identifiers and QR codes that will give search capabilities to customers and workers. An estimate of the contamination produced is recorded along the product path, as well as relevant product data."/>
         <Projects textTitle="Final Degree Project on the creation of a model for the detection of emotions, using convolutional neural networks using Python, Keras and MobileNetV2. And its subsequent implementation in a native Android application using Android Studio and OpenCV." img={logo2} url="https://github.com/AnthonyRich13/EmotionRecognition-Mobile" title="EmoDect" text1="Mobile application, which using the integrated camera of the mobile phone, captures frames, which by means of a HaarCascade Classifier detects the face and cuts it out, once cut out it is introduced into a model created manually using Convolutional Neural Networks, which thanks to a training using a MobileNetV2 layer, a pooling layer, a fully connected layer and a dense layer, obtains a prediction of 85% in the detection of the emotion.Of course there are intermediate features, such as an Adam optimiser, saving of the best model so far and a decrease of overfitting, so that the Neural Network is not over-trained." text2="Once the model's prediction is obtained, its numerical setting is returned in the application, which will be returned as text manually to the frame, so that the person using the mobile phone can observe the emotion in real time. Of course, it has its problems, and when using an integrated GPU, the speed is slower than for example using a specialised ASIC such as a TPU."/>

      </div>
      
  );
}

export default ProjectsPage;