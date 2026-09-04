export default function FeaturePariwisataSection() {
  return (
    <section id="data-science" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Tourism Data Analysis & Machine Learning : Cirebon Regency</h2>

        {/* Deskripsi */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow mb-10">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
            Tourism Dataset Analysis & Machine Learning Approach
          </h3>
          <p className="mb-4">
            Analyzed tourism data from Cirebon Regency through exploratory data
            analysis, data preprocessing, feature engineering, predictive modeling,
            clustering, model evaluation, and what-if scenario simulation.
          </p>
          <ul className="list-disc ml-6 text-sm space-y-1 text-left">
            <li>EDA (Exploratory Data Analysis)</li>
            <li>Feature Engineering</li>
            <li>Correlation between Features and Targets</li>
            <li>Modeling (Linear, Random Forest, XGBoost)</li>
            <li>Skewness Correction on Features</li>
            <li>Scaling and Modeling</li>
            <li>Cross Validation and Model Evaluation</li>
            <li>Visualization of predicted & actual results</li>
          </ul>
          <p className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-300 text-left">
            Machine Learning :
          </p>
          <ul className="list-disc ml-6 text-sm space-y-1 text-left">
            <li>Monthly Segmentation of Tourists (Clustering Seasonal Behavior)</li>
            <li>Simple Tourist Prediction and Monitoring</li>
            <li>"What-if" Scenario Simulation</li>
          </ul>
          <p className="mb-2 font-medium">Feature Engineering Objective :</p>
            <ul className="list-disc ml-6 space-y-1 text-left">
                <li>
                Prepare data so that it can be predicted or analyzed accurately by machine learning models.
                </li>
                <li>
                Provide key indicators that represent :
                <ul className="list-disc ml-6 mt-1 space-y-1 text-left">
                    <li>Visitation rate</li>
                    <li>Quality of facilities</li>
                    <li>Inequality between segments</li>
                    <li>Efficiency of infrastructure utilization</li>
                </ul>
                </li>
            </ul>
        </div>

        {/* Tabel Fitur Feature Engineering */}
        <div className="overflow-x-auto mt-8">
        <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
            Features Used in Feature Engineering
        </h4>
        <table className="table-auto w-full text-sm text-left border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
            <tr>
                <th className="px-4 py-2 border">Feature Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Category</th>
            </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            {[
                ['total_kamar', 'Number of hotel rooms across Cirebon Regency', 'Infrastructure Capacity'],
                ['total_hotel', 'Total number of hotels in the area', 'Infrastructure Capacity'],
                ['kamar_per_hotel', 'Average number of rooms per hotel', 'Infrastructure Capacity'],
                ['wisatawan_per_kamar', 'Ratio of tourists to the number of rooms', 'Infrastructure Utilization'],
                ['persentase_wisman', 'Proportion of international tourists out of total visits', 'Tourist Composition'],
                ['selisih_wisman_domestik', 'Difference in numbers between domestic and international tourists', 'Tourist Composition'],
                ['occupancy_berbintang', 'Occupancy rate of star-rated hotels (%)', 'Occupancy & Stay'],
                ['occupancy_nonbintang', 'Occupancy rate of non-star-rated hotels (%)', 'Occupancy & Stay'],
                ['occupancy_gap', 'Occupancy gap between star-rated and non-star-rated hotels', 'Occupancy & Stay'],
                ['lama_inap_domestik', 'Average length of stay for domestic guests (days)', 'Occupancy & Stay'],
                ['lama_inap_asing', 'Average length of stay for international guests (days)', 'Occupancy & Stay'],
            ].map(([feature, desc, category], i) => (
                <tr key={i}>
                <td className="px-4 py-2 border font-mono">{feature}</td>
                <td className="px-4 py-2 border">{desc}</td>
                <td className="px-4 py-2 border">{category}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

        {/* Gambar & Penjelasan */}
        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 mt-16">
            Visualization results and Explanation
        </h3>
        <div className="space-y-12 mt-4">
          {[
            {
              title: "Handling Missing Value (Before)",
              descriptionList: [
                "Visualizes the average length of stay of foreign & domestic guests based on `Hotel Class.",
                "Bar chart shows the comparison between the two hotel classes.",
                "Although the data is only 2 rows, the visual can still show the difference in the level of length of stay."
                ],
              file: "/assets/handling missing value dataset lama inap (before).png",
              description: "Visual before handling missing values in the stay duration dataset."
            },
            {
              title: "Handling Missing Value (After)",
              descriptionList: [
                "Flat horizontal line for `Foreign Guests` (because the value is the same: 1.94).",
                "Up (or down) line for `Domestic Guests`, according to the value.",
              ],
              file: "/assets/handling missing value dataset lama inap (after).png",
              description: "After handling missing values using imputation or interpolation."
            },
            {
              title: "Correlation Between Features and Targets",
              descriptionList: [
                "+1 → Perfect positive linear relationship.",
                "0 → No linear relationship.",
                "-1 → Perfect negative linear relationship."
                ],
              file: "/assets/korelasi antar fitur target.png",
              description: "Correlation matrix between features and target: total tourists.",
              tableData: [
                    ["Feature A", "Feature B", "Correlation"],
                    ["Total Wisatawan", "Lama Menginap", "Moderate positive"],
                    ["Wisatawan Domestik", "Wisatawan Per Kamar", "High positive"],
                    ["Tamu Asing", "Persentase Wisman", "Very high"],
                    ["Occupancy Gap", "Wisatawan Mancanegara", "Low / negative"]
                ],
            },
            {
              title: "Prediction vs Actual Total Tourists (Random Forest)",
              descriptionList: [
                "Comparing actual values ​​to predicted values.",
                "See how close the model's predictions are to reality and whether there are systematic error patterns.",
                ],
              file: "/assets/Random Forest aktual vs prediksi total wisatawan.png",
              description: "Actual vs predicted tourist data using Random Forest model.",
              tableData: [
                    ["Purpose", "Explanation"],
                    ["Visual evaluation", "Shows **how accurately** the model predicts actual values"],
                    ["Error diagnosis", "Reveals whether the model tends to **under- or over-predict** in certain areas"],
                    ["Model fit validation", "If points are scattered too far from the red line, the model is not a perfect fit"]
                ],
            },
            {
              title: "Prediction vs Actual",
              descriptionList: [
                "Building a simple prediction model to estimate the total number of monthly tourists based on the number of Domestic Tourist and Foreign Tourist.",
                "Prediction is very close to actual: indicates that the simple linear model is quite accurate for prediction based on two features.",
                "The blue and orange lines overlap, meaning the R2 of the model is very high."
                ],
              file: "/assets/prediksi dan aktual.png",
              description: "Line graph comparison of prediction vs actual values across time."
            },
            {
              title: "KMeans Clustering of Monthly Tourists",
              descriptionList: [
                "Cluster 1 (April, December): Months with peak domestic visits.",
                "Cluster 2 (March, August): Months with a relatively high proportion of foreign tourists.",
                "Cluster 0: Months with normal visit patterns."
                ],
              file: "/assets/segmentasi bulan berdasarkan pola wisatawan (Kmeans Clustering).png",
              description: "Clustering monthly tourists based on visit patterns."
            },
            {
              title: "Total Monthly Tourists per Cluster",
              descriptionList: [
                "Cluster 1 = peak months (April, December): very high number of tourists.",
                "Cluster 0 = medium months: stable and dominate most of the months.",
                "Cluster 2 = quiet months: low number of tourists, but higher percentage of foreign tourists.",
                "Domestic tourists dominate, especially in cluster 1.",
                "Foreign tourists (International) have small fluctuations, but significant in cluster 2.",
                "Cluster 1 has only a few foreign tourists, but very high for domestic, the effect of national holidays or big days."
                ],
              file: "/assets/total wisatawan bulanan per cluster.png",
              description: "Monthly tourist totals per cluster after KMeans grouping."
            },
            {
              title: "Domestic & International per Cluster",
              descriptionList: [
                "Cluster 1 = peak months (April, December): very high number of tourists.",
                "Cluster 0 = medium months: stable and dominate most of the months.",
                "Cluster 2 = quiet months: low number of tourists, but higher percentage of foreign tourists.",
                "Domestic tourists dominate, especially in cluster 1.",
                "Foreign tourists (International) have small fluctuations, but significant in cluster 2.",
                "Cluster 1 has only a few foreign tourists, but very high for domestic, the effect of national holidays or big days."
                ],
              file: "/assets/wisatawan domestik dan mancanegara bulanan per cluster.png",
              description: "Comparison of domestic and foreign tourists per cluster."
            },
            {
              title: "What-if Scenario Simulation",
              descriptionList: [
                "What happens if the number of hotels increases by 20%?.",
                "What if the room capacity increases by 50% + foreign tourist arrivals increase by 10%?.",
                "Scenario 1 (+20% hotels) provides the closest prediction or slightly below the realization, indicating that increasing the number of hotels tends to be more effective in increasing the number of tourists.",
                "Scenario 2 (+50% rooms +10% foreign tourists) results are lower, indicating that only adding rooms and foreign tourists is not significant enough, perhaps due to limitations on other aspects (facilities, access, etc.)",
                "Interestingly, March is the only month where both scenarios provide predictions higher than the actual realization, meaning that there is still a chance for an increase in the low-visit months."
                ],
              file: "/assets/skenario what if.png",
              description: "What-if scenario simulation on infrastructure expansion.",
              tableData: [
                    ["Month", "Actual Total Tourists", "+20% Hotel Scenario Prediction", "+50% Rooms & +10% Foreign Tourists Scenario Prediction"],
                    ["January", "96,346", "94,054.53", "86,925.90"],
                    ["February", "89,256", "89,250.46", "84,656.53"],
                    ["March", "49,708", "56,811.91", "56,811.91"],
                    ["April", "142,007", "134,220.78", "126,439.30"],
                    ["May", "86,945", "87,538.77", "83,495.95"],
                    ["June", "93,325", "93,511.69", "87,103.26"],
                    ["July", "79,626", "80,342.15", "76,764.81"],
                    ["August", "66,214", "69,741.44", "67,095.15"],
                    ["September", "101,759", "99,854.17", "91,191.79"],
                    ["October", "87,625", "87,915.98", "82,825.51"],
                    ["November", "72,648", "73,958.74", "71,536.06"],
                    ["Desember", "131,570", "129,315.39", "120,853.80"]
                ],
            },
            {
              title: "Visualization of Scenario Effects",
              descriptionList: [
                "What happens if the number of hotels increases by 20%?.",
                "What if the room capacity increases by 50% + foreign tourist arrivals increase by 10%?.",
                "Scenario 1 (+20% hotels) provides the closest prediction or slightly below the realization, indicating that increasing the number of hotels tends to be more effective in increasing the number of tourists.",
                "Scenario 2 (+50% rooms +10% foreign tourists) results are lower, indicating that only adding rooms and foreign tourists is not significant enough, perhaps due to limitations on other aspects (facilities, access, etc.)",
                "Interestingly, March is the only month where both scenarios provide predictions higher than the actual realization, meaning that there is still a chance for an increase in the low-visit months."
                ],
              file: "/assets/visual skenario what if.png",
              description: "Visual representation of scenario-based prediction changes.",
              tableData: [
                    ["Month", "Actual Total Tourists", "+20% Hotel Scenario Prediction", "+50% Rooms & +10% Foreign Tourists Scenario Prediction"],
                    ["January", "96,346", "94,054.53", "86,925.90"],
                    ["February", "89,256", "89,250.46", "84,656.53"],
                    ["March", "49,708", "56,811.91", "56,811.91"],
                    ["April", "142,007", "134,220.78", "126,439.30"],
                    ["May", "86,945", "87,538.77", "83,495.95"],
                    ["June", "93,325", "93,511.69", "87,103.26"],
                    ["July", "79,626", "80,342.15", "76,764.81"],
                    ["August", "66,214", "69,741.44", "67,095.15"],
                    ["September", "101,759", "99,854.17", "91,191.79"],
                    ["October", "87,625", "87,915.98", "82,825.51"],
                    ["November", "72,648", "73,958.74", "71,536.06"],
                    ["Desember", "131,570", "129,315.39", "120,853.80"]
                ],
            }
          ].map((item, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold mb-2 mt-6 text-left">{item.title}</h4>
              {/* Deskripsi List */}
                {item.descriptionList && (
                <ul className="list-disc text-sm text-gray-700 dark:text-gray-300 mt-2 ml-6 space-y-1 text-left">
                    {item.descriptionList.map((desc, j) => (
                    <li key={j}>{desc}</li>
                    ))}
                </ul>
                )}
              <img src={item.file} alt={item.title} className="rounded shadow-md mx-auto" />
              <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-300 italic">{item.description}</p>
              {item.tableData && (
                <div className="overflow-x-auto mt-4">
                    <table className="table-auto w-full text-sm text-left border border-gray-300 dark:border-gray-700">
                    <thead className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white">
                        <tr>
                        {item.tableData[0].map((header, index) => (
                            <th key={index} className="px-4 py-2 border">{header}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                        {item.tableData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                            <td key={colIndex} className="px-4 py-2 border">{cell}</td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                )}
            </div>
        ))}
        </div>

        {/* Penutup */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/40 p-6 rounded-lg shadow text-sm md:text-base text-gray-800 dark:text-gray-100">
          <h4 className="text-xl font-semibold mb-3 text-left text-blue-700 dark:text-blue-300">
            Final Conclusion
          </h4>
          <ul className="list-disc ml-5 space-y-2 text-left">
            <li>Random Forest showed strong predictive performance on the evaluated tourism dataset.</li>
            <li> Seasonal and fluctuating tourist data, can be grouped well, Segmentation helps marketing strategy.</li>
            <li>"What If" scenarios are useful for policy simulations, Provide a realistic picture of the impact of policies.</li>
            <li>The scenario analysis suggests that increasing hotel capacity may have a more positive effect than increasing room capacity alone.</li>
            <li>Interactive visualization dashboards improve data understanding, Facilitate data-based decision making.</li>
            <li>Foreign tourists represent a smaller portion of total visits, indicating a potential area for further analysis.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
