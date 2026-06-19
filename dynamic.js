function loadData(type) {
    let box = document.getElementById("display");

    if (type === "structured") {

        box.innerHTML = `
            <h2>Structured Medical Data</h2>
            <p>Structured data is organized information stored in tables, databases and Electronic Health Records.</p>

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
        `;


    } else if (type === "semi") {

        box.innerHTML = `
            <h2>Semi Structured Medical Data</h2>
            <p>Data having tags or metadata but no fixed table structure.</p>

            <h3>Examples</h3>
            <ul>
                <li>FHIR Healthcare Records</li>
                <li>HL7 Messages</li>
                <li>JSON Medical APIs</li>
                <li>XML Reports</li>
            </ul>
        `;


    } else if (type === "characteristics") {

        box.innerHTML = `
        <h2>Characteristics of Medical Data (For Data Scientists)</h2>

        <h3>1. High Dimensionality</h3>
        <p>Medical datasets contain a very large number of variables.</p>

        <h4>Examples</h4>
        <ul>
            <li>Patient demographics (Age, Gender, Location)</li>
            <li>Lab tests (Blood glucose, Cholesterol)</li>
            <li>Vital signs (Heart rate, Blood pressure)</li>
            <li>Imaging features (MRI, CT measurements)</li>
            <li>Genomic data (Thousands of gene values)</li>
        </ul>

        <p>A single patient may have thousands or millions of possible features.</p>


        <h3>2. Heterogeneous Data</h3>
        <ul>
            <li>Structured: Age, BP, Lab values</li>
            <li>Categorical: Blood group, Diagnosis type</li>
            <li>Time Series: ECG, Heart rate</li>
            <li>Text: Doctor notes, Reports</li>
            <li>Images: X-Ray, MRI, CT</li>
            <li>Signals: EEG, ECG</li>
            <li>Genomics: DNA sequences</li>
        </ul>


        <h3>3. Missing Data</h3>
        <ul>
            <li>Tests not ordered</li>
            <li>Equipment failure</li>
            <li>Follow-up missing</li>
            <li>Data entry errors</li>
        </ul>


        <h3>4. Noisy and Error-Prone Data</h3>
        <ul>
            <li>Wrong patient information</li>
            <li>Measurement errors</li>
            <li>Duplicate records</li>
            <li>Incorrect coding</li>
        </ul>


        <h3>5. Time-Dependent Data</h3>
        <ul>
            <li>Patient history</li>
            <li>Disease progression</li>
            <li>Medication changes</li>
            <li>Repeated lab tests</li>
        </ul>


        <h3>6. Privacy Requirements</h3>
        <ul>
            <li>Medical history</li>
            <li>Patient information</li>
            <li>Genetic data</li>
        </ul>

        <p>Techniques: Anonymization, Encryption, Access Control</p>


        <h3>7. Class Imbalance</h3>

        <pre>
100000 Patients
99000 Healthy
1000 Disease Cases
        </pre>

        <ul>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1 Score</li>
            <li>ROC-AUC</li>
        </ul>


        <h3>8. Unstructured Text Data</h3>
        <ul>
            <li>Doctor Notes</li>
            <li>Clinical Reports</li>
            <li>Discharge Summary</li>
        </ul>

        <p>Uses: NLP, Transformers, Text Embeddings</p>


        <h3>9. Bias and Fairness Issues</h3>
        <ul>
            <li>Population imbalance</li>
            <li>Missing groups</li>
            <li>Healthcare access differences</li>
        </ul>


        <h3>10. Explainability</h3>
        <ul>
            <li>Feature Importance</li>
            <li>SHAP Values</li>
            <li>Explainable AI</li>
        </ul>


        <h3>11. Longitudinal Data</h3>
        <pre>
2019: Diabetes Diagnosis
2020: Medication Started
2022: Kidney Function Reduced
2025: Treatment Changed
        </pre>


        <h3>12. Small Data vs Large Features</h3>
        <p>Example: 100 patients with 50000 genetic features.</p>

        <ul>
            <li>Regularization</li>
            <li>Feature Selection</li>
            <li>Cross Validation</li>
        </ul>


        <h3>13. Data Integration Challenges</h3>
        <ul>
            <li>Hospitals</li>
            <li>Labs</li>
            <li>Wearables</li>
            <li>Insurance Data</li>
        </ul>


        <h3>14. Difficult Clinical Labels</h3>
        <p>Doctors may disagree about diagnosis, affecting ML labels.</p>


        <h3>15. High Impact Predictions</h3>
        <ul>
            <li>False Negative → Missed Disease</li>
            <li>False Positive → Unnecessary Treatment</li>
        </ul>


        <h3>Summary</h3>
        <p>
        Medical Data = Complex + Multimodal + Sensitive + 
        Time-dependent + Noisy + Imbalanced + Explainable
        </p>
        `;


    } else {

        box.innerHTML = `
            <h2>Unstructured Medical Data</h2>
            <p>Large healthcare data requiring AI processing.</p>
        `;
    }
}
