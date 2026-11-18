import { useEffect, useState } from "react";
import { getDashboardSummary } from "../services/adminService";

const AdminDashboard = () => {
    const [summary, setSummary] = useState({
        totalProducts: 0,
        totalCategories: 0,
        totalCustomers: 0,
        totalOrders: 0
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const data = await getDashboardSummary();
                setSummary(data);
            } catch (error) {
                console.error("Dashboard error:", error);
                setError("Unable to load dashboard data.");
            } finally {
                setLoading(false);
            }
        };

        fetchSummary();
    }, []);

    const cards = [
        { title: "Total Products", value: summary.totalProducts },
        { title: "Total Categories", value: summary.totalCategories },
        { title: "Total Customers", value: summary.totalCustomers },
        { title: "Total Orders", value: summary.totalOrders }
    ];

    if (loading) {
        return <h3>Loading dashboard...</h3>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Admin Dashboard</h2>

            <div className="row">
                {cards.map((card, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5>{card.title}</h5>
                                <h2>{card.value}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
