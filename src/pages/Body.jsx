import Differ from "../components/Differ";
import Service from "../components/Service";
import Review from "../components/Review";

function Body() {
    return(
        <div>
            <div className="flex w-full flex-col lg:flex-row">
                <Differ/>
                <div className="divider lg:divider-horizontal" />
                <Differ/>
                <div className="divider lg:divider-horizontal" />
                <Differ/>
            </div>
            <Service />
            <div className="flex w-full flex-col lg:flex-row">
                <Review/>
                <div className="divider lg:divider-horizontal" />
                <Review/>
                <div className="divider lg:divider-horizontal" />
                <Review/>
            </div>
        </div>
    );
}
export default Body;