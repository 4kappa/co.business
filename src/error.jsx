import { useRouteError } from "react-router-dom";
import "../public/css/error.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); 

  return (
    <>
      <section className="all-page tree-back">
        <div className="flex-dev">
          <h5 className="wb mont fw8 stop-copy">Вы забрели куда-то не туда...</h5>
          <button className="bg-hover wc-hover btn-flex-bg"><a className="btn-text-up mont fw8" href="/">вернуться</a></button> 
        </div>
      </section>
    </>
  );
}