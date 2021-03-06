import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function Card() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card1 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card2 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <Card3 />
          </div>
        </div>
      </div>
    </>
  );
}
