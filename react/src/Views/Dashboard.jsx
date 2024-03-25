import React from "react";
import SimpleCard from "../Components/Card/CardDashboard";
import Example from "../Components/Charts/LineDiagram";

export default function Dashboard() {
    return (
        <div>
            <div className="flex flex-wrap">
                <Example className="w-auto" />
                <div className="flex">
                    <SimpleCard />
                    <SimpleCard />
                </div>
            </div>
        </div>
    );
}
