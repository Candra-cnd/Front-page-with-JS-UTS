export default function FeatureSection() {
  return (
    <section id="feature-engineering" className="py-12 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Feature Engineering Pipeline with Model Training end Evaluation</h2>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow space-y-10">
          {/* Deskripsi awal proyek */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Housing Dataset Feature Engineering & Regression Analysis
            </h3>
            <p className="mb-3">
              This project aims to build a machine learning pipeline to predict house prices based on the 
              <strong>Housing.csv</strong>. The workflow includes the stages of <em>data preparation</em>,
                <em>feature engineering</em>, model training, and prediction evaluation.
            </p>
            <ul className="list-disc ml-6 text-sm mt-6 mb-4 space-y-1 text-left">
                <li><strong>Cleaning Data:</strong> Remove duplicates and check for empty values.</li>
                <li><strong>Encoding:</strong> Label encoding for binary categorical columns, and one-hot encoding for multicategory columns such as <code>furnishingstatus</code>.</li>
                <li><strong>Feature Scaling:</strong> Use <code>StandardScaler</code> to normalize numeric columns such as <code>area</code>, <code>price</code>, and others.</li>
                <li><strong>Exploratory Data Analysis:</strong> Analyze correlations between features with heatmaps and detect relationships to target <code>price</code>.</li>
                <li><strong>Modeling:</strong> Train two regression models, namely Linear Regression and XGBoost, to compare performance.</li>
                <li><strong>Evaluation:</strong> Analyze the residuals (difference between predictions and actual values) to understand the accuracy and distribution of model errors.</li>
            </ul>
          </div>

          {/* Tabel fitur */}
          <div>
            <h4 className="font-semibold mt-6 mb-4 text-lg">Table Feature Housing Dataset</h4>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm text-left border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
                  <tr>
                    <th className="px-4 py-2 border">Column Name</th>
                    <th className="px-4 py-2 border">Data Type</th>
                    <th className="px-4 py-2 border">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                  <tr><td className="px-4 py-2 border">price</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Selling price of the house.</td></tr>
                  <tr><td className="px-4 py-2 border">area</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Total area of the house (in square feet).</td></tr>
                  <tr><td className="px-4 py-2 border">bedrooms</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Number of bedrooms in the house.</td></tr>
                  <tr><td className="px-4 py-2 border">bathrooms</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Number of bathrooms in the house.</td></tr>
                  <tr><td className="px-4 py-2 border">stories</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Number of stories (floors) in the house.</td></tr>
                  <tr><td className="px-4 py-2 border">mainroad</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house is located on a main road (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">guestroom</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house has a guestroom (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">basement</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house includes a basement (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">hotwaterheating</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house has hot water heating (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">airconditioning</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house has air conditioning (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">parking</td><td className="px-4 py-2 border">int64</td><td className="px-4 py-2 border">Number of car parking spaces available.</td></tr>
                  <tr><td className="px-4 py-2 border">prefarea</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Whether the house is in a preferred residential area (yes/no).</td></tr>
                  <tr><td className="px-4 py-2 border">furnishingstatus</td><td className="px-4 py-2 border">object</td><td className="px-4 py-2 border">Furnishing level: furnished, semi-furnished, or unfurnished.</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Visualisasi Analisis Model */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Model Evaluation Visualization</h4>

            <div>
              <h5 className="font-semibold mb-1">Outlier Detection</h5>
              <p className="text-sm mb-2">
                Outliers are detected from the residual scatterplot. Outliers tend to appear in houses with extreme prices and areas.
              </p>
              <img src="/assets/Outliers in Area.png" alt="Outlier plot" className="rounded shadow-md mx-auto" />
            </div>

            <div>
              <h5 className="font-semibold mb-1">Residual Plot</h5>
              <p className="text-sm mb-2">
                The residuals are spread around the zero line, but there is underprediction at high prices.
              </p>
              <img src="/assets/Residual Plot XGBoost.png" alt="Residual plot" className="rounded shadow-md mx-auto" />
            </div>

            <div>
              <h5 className="font-semibold mb-1">Histogram of Residuals</h5>
              <p className="text-sm mb-2">
                Most of the errors are close to 0 indicating that the model has good performance.
              </p>
              <img src="/assets/Histogram of Residuals.png" alt="Histogram of residuals" className="rounded shadow-md mx-auto" />
            </div>

            <div>
              <h5 className="font-semibold mb-1">QQ Plot</h5>
              <p className="text-sm mb-2">
                The residual distribution is fairly normal (points follow the line), validation of the linear regression model.
              </p>
              <img src="/assets/QQ Plot of Residuals.png" alt="QQ plot" className="rounded shadow-md mx-auto" />
            </div>
          </div>

          {/* Tools */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-6">
            Tools: Python, Pandas, Scikit-learn, Seaborn, Matplotlib, XGBoost
          </p>

          {/* Conclusion */}
            <div className="mt-10 bg-blue-50 dark:bg-blue-900/40 p-6 rounded-lg shadow text-sm md:text-base text-gray-800 dark:text-gray-100">
            <h4 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                Final Conclusion
            </h4>
            <p className="mb-2">
                Based on the visualizations and residual analysis, the model is able to predict house prices quite accurately across most of the dataset.
                This is supported by the residuals being randomly scattered around zero and the histogram showing a symmetric distribution centered near zero.
            </p>
            <p className="mb-2">
                However, the model tends to underpredict high-priced houses and is affected by extreme outliers. The QQ plot also shows that the residuals follow a near-normal distribution,
                validating the use of linear regression for this problem.
            </p>
            <p>
                To further improve model performance, it's recommended to handle outliers more effectively and consider adding features such as location or house quality if available.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
