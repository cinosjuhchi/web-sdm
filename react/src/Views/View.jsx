import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

function View() {
    return (
        <div className="wrap bg-putih300">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="content p-4">Content</div>
            </div>
        </div>
    );
}

export default View;
