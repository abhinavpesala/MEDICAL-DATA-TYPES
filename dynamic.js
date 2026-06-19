function loadData(type) {

let box = document.getElementById("display");


if(type==="structured"){

box.innerHTML=`

<h2>Structured Medical Data</h2>

<p>
Structured data is organized information stored in tables, databases and Electronic Health Records.
</p>


<h3>Examples (Click for Details)</h3>

<ul>

<li onclick="showStructured('demographics')">Patient Demographics</li>
<li onclick="showStructured('age')">Age</li>
<li onclick="showStructured('gender')">Gender</li>
<li onclick="showStructured('bp')">Blood Pressure</li>
<li onclick="showStructured('lab')">Laboratory Results</li>
<li onclick="showStructured('medicine')">Medication Records</li>
<li onclick="showStructured('diagnosis')">Diagnosis Codes</li>
<li onclick="showStructured('hospital')">Hospital Records</li>

</ul>


<div id="detailBox"></div>

`;

}



else if(type==="semi"){


box.innerHTML=`

<h2>Semi Structured Medical Data</h2>

<p>
Data having tags or metadata but no fixed table structure.
</p>


<h3>Examples</h3>

<ul>
<li>FHIR Healthcare Records</li>
<li>HL7 Messages</li>
<li>JSON Medical APIs</li>
<li>XML Reports</li>
<li>Medical Device Logs</li>
</ul>


<h3>Formats</h3>

<ul>
<li>JSON</li>
<li>XML</li>
<li>FHIR</li>
</ul>


<h3>Python Tools</h3>

<ul>
<li>JSON Library</li>
<li>BeautifulSoup</li>
<li>Pandas</li>
</ul>

`;

}




else if(type==="characteristics"){


box.innerHTML=`

<h2>Characteristics of Medical Data</h2>


<h3>1. High Dimensionality</h3>

<p>
Medical datasets contain thousands of variables.
</p>

<ul>
<li>Patient demographics</li>
<li>Lab values</li>
<li>MRI features</li>
<li>Genomic data</li>
</ul>


<h3>2. Heterogeneous Data</h3>

<ul>
<li>Structured data</li>
<li>Text</li>
<li>Images</li>
<li>Signals</li>
<li>Genomics</li>
</ul>


<h3>3. Missing Data</h3>

<ul>
<li>Missing tests</li>
<li>Equipment failure</li>
<li>Data entry problems</li>
</ul>


<h3>4. Noise</h3>

<ul>
<li>Wrong values</li>
<li>Duplicate records</li>
<li>Measurement errors</li>
</ul>


<h3>5. Time Dependent Data</h3>

<ul>
<li>Disease progression</li>
<li>Patient history</li>
<li>Medication changes</li>
</ul>


<h3>6. Privacy</h3>

<ul>
<li>Patient information</li>
<li>Medical history</li>
<li>Genetic data</li>
</ul>


<h3>7. Class Imbalance</h3>

<pre>
100000 Patients

99000 Healthy
1000 Disease
</pre>


<h3>8. Explainability</h3>

<ul>
<li>Feature Importance</li>
<li>SHAP Values</li>
<li>XAI</li>
</ul>


`;

}




else if(type==="unstructured"){


box.innerHTML=`

<h2>Unstructured Medical Data</h2>

<p>
Large healthcare data requiring AI processing.
</p>


<h3>Medical Imaging (Click)</h3>

<ul>

<li onclick="showUnstructured('xray')">X-Ray</li>

<li onclick="showUnstructured('ct')">CT Scan</li>

<li onclick="showUnstructured('mri')">MRI</li>

<li onclick="showUnstructured('pet')">PET Scan</li>

<li onclick="showUnstructured('ultrasound')">Ultrasound</li>

<li onclick="showUnstructured('histopathology')">Histopathology</li>

</ul>


<h3>Clinical Text</h3>

<ul>
<li>Doctor Notes</li>
<li>Radiology Reports</li>
<li>Discharge Summary</li>
</ul>


<h3>NLP</h3>

<ul>
<li>spaCy</li>
<li>NLTK</li>
<li>Transformers</li>
<li>ClinicalBERT</li>
<li>BioBERT</li>
</ul>


<h3>Signals</h3>

<ul>
<li>ECG</li>
<li>EEG</li>
<li>PPG</li>
</ul>


<div id="unstructuredDetail"></div>

`;

}

}




function showStructured(type){

let box=document.getElementById("detailBox");


let data={


demographics:
`
<h2>Patient Demographics</h2>
<p>Contains age, gender, location and patient details.</p>
`,


age:
`
<h2>Age</h2>
<p>Age helps predict disease risk and patient groups.</p>
`,


gender:
`
<h2>Gender</h2>
<p>Used for population analysis and medical research.</p>
`,


bp:
`
<h2>Blood Pressure</h2>
<p>Example: 120/80 mmHg. Used for heart disease prediction.</p>
`,


lab:
`
<h2>Laboratory Results</h2>
<p>Includes glucose, cholesterol, enzymes and blood tests.</p>
`,


medicine:
`
<h2>Medication Records</h2>
<p>Contains drug name, dose and treatment duration.</p>
`,


diagnosis:
`
<h2>Diagnosis Codes</h2>
<p>Represents diseases using medical coding systems.</p>
`,


hospital:
`
<h2>Hospital Records</h2>
<p>Admission, discharge and treatment details.</p>
`

};


box.innerHTML=data[type];

}





function showUnstructured(type){


let box=document.getElementById("unstructuredDetail");



let data={


xray:
`
<h2>X-Ray</h2>
<p>Uses radiation to create images of bones and organs.</p>

<h3>Python</h3>
<p>OpenCV, Pydicom</p>

<h3>AI</h3>
<p>CNN, ResNet</p>
`,



ct:
`
<h2>CT Scan</h2>
<p>Creates 3D body images using multiple slices.</p>

<h3>Python</h3>
<p>MONAI, SimpleITK</p>

<h3>AI</h3>
<p>3D CNN, U-Net</p>
`,



mri:
`
<h2>MRI</h2>
<p>Creates detailed soft tissue images.</p>

<h3>Python</h3>
<p>Nibabel</p>

<h3>AI</h3>
<p>U-Net, Transformer</p>
`,



pet:
`
<h2>PET Scan</h2>

<p>
Shows metabolic activity inside the body.
</p>

<h3>Uses</h3>

<ul>
<li>Cancer detection</li>
<li>Brain studies</li>
<li>Heart analysis</li>
</ul>

<h3>Format</h3>
<p>DICOM</p>

<h3>Python</h3>
<p>Pydicom</p>

<h3>AI Model</h3>
<p>CNN</p>

`,


ultrasound:
`
<h2>Ultrasound</h2>

<p>
Uses sound waves to create images.
</p>

<h3>AI</h3>
<p>YOLO</p>
`,


histopathology:
`
<h2>Histopathology</h2>

<p>
Microscope tissue images used for cancer diagnosis.
</p>

<h3>Python</h3>
<p>OpenSlide</p>

<h3>AI</h3>
<p>Vision Transformer</p>
`

};


box.innerHTML=data[type];

}
