
import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "comments", label: "Comments" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="product_description_area">
      <div className="container">
        <div className="tab-content">
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  type="button"
                  className={`nav-link ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-pane-content">
            {activeTab === "description" && (
              <div>
                <h4>Description</h4>
                <p>Product description will be added here.</p>
              </div>
            )}

            {activeTab === "specification" && (
              <div>
                <h4>Specification</h4>
                <p>Product specifications will be added here.</p>
              </div>
            )}

            {activeTab === "comments" && (
              <div>
                <h4>Comments</h4>
                <p>Customer comments will be added here.</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h4>Reviews</h4>
                <p>Customer reviews will be added here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
