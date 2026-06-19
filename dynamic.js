function loadData(type){


let box=document.getElementById("display");



if(type==="structured"){


box.innerHTML=`

<h2>Structured Medical Data</h2>


<p>
Structured data is organized information stored in tables,
databases and Electronic Health Records.
</p>


<h3>Examples</h3>

<ul>

<li>Patient Demographics</li>
<li>Age</li>
<li>Gender</li>
<li>Blood Pressure</li>
<li>Laboratory Results</li>
<li>Medication Records</li>
<li>Diagnosis Codes</li>
<li>Hospital Records</li>

</ul>



<h3>Characteristics</h3>


<ul>

<li>Fixed Schema</li>
<li>Easy SQL Querying</li>
<li>Low Processing Requirement</li>
<li>Highly Organized</li>
<li>Machine Learning Ready</li>

</ul>



<h3>Correlation Analysis</h3>


<ul>

<li>
Positive Correlation:
Age and Blood Pressure
</li>


<li>
Negative Correlation:
Medication Dose and Disease Symptoms
</li>


<li>
Uncorrelated:
Patient ID and Disease Outcome
</li>

</ul>



<h3>Python Technologies</h3>


<ul>

<li>Pandas</li>
<li>NumPy</li>
<li>SQLAlchemy</li>
<li>Scikit-learn</li>
<li>XGBoost</li>

</ul>


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

<li>Python JSON Library</li>
<li>BeautifulSoup</li>
<li>Pandas</li>
<li>PyFHIR</li>

</ul>



`;

}




else{


box.innerHTML=`

<h2>Unstructured Medical Data</h2>


<p>
Large healthcare data requiring AI processing.
Includes images, text, signals and genomic information.
</p>



<h3>Medical Imaging Types</h3>


<table>


<tr>

<th>Data</th>
<th>Format</th>
<th>Python</th>
<th>AI Model</th>

</tr>



<tr>

<td>X-Ray</td>
<td>DICOM, JPG, PNG</td>
<td>OpenCV, Pydicom</td>
<td>CNN, ResNet</td>

</tr>



<tr>

<td>CT Scan</td>
<td>DICOM, NIFTI</td>
<td>MONAI, SimpleITK</td>
<td>3D CNN, U-Net</td>

</tr>



<tr>

<td>MRI</td>
<td>DICOM, NIFTI</td>
<td>Nibabel</td>
<td>U-Net, Transformer</td>

</tr>



<tr>

<td>PET</td>
<td>DICOM</td>
<td>Pydicom</td>
<td>CNN</td>

</tr>



<tr>

<td>Ultrasound</td>
<td>DICOM, MP4</td>
<td>OpenCV</td>
<td>YOLO</td>

</tr>



<tr>

<td>Histopathology</td>
<td>SVS, TIFF</td>
<td>OpenSlide</td>
<td>Vision Transformer</td>

</tr>


</table>





<h3>Clinical Text Data</h3>


<ul>

<li>Doctor Notes</li>
<li>Radiology Reports</li>
<li>Discharge Summary</li>
<li>Pathology Reports</li>

</ul>



<h3>NLP Technologies</h3>


<ul>

<li>spaCy</li>
<li>NLTK</li>
<li>Transformers</li>
<li>ClinicalBERT</li>
<li>BioBERT</li>

</ul>




<h3>Signal Data</h3>


<ul>

<li>ECG</li>
<li>EEG</li>
<li>PPG</li>

</ul>



<h3>Formats</h3>

<ul>

<li>CSV</li>
<li>EDF</li>
<li>WFDB</li>

</ul>




<h3>Medical Raw Data Problems</h3>


<ul>

<li>Missing Values</li>
<li>Noise</li>
<li>Large Size</li>
<li>Different Scanner Vendors</li>
<li>Class Imbalance</li>
<li>Privacy Issues</li>

</ul>




<h3>AI Pipeline</h3>


<pre>

Raw Data

↓

Cleaning

↓

Preprocessing

↓

Feature Extraction

↓

Model Training

↓

Evaluation

↓

Deployment

</pre>


`;

}



}
