import { useEffect } from "react";
import { Outlet, useMatches, type RouteObject } from "react-router-dom";


const CenterLayout = () => {


    const matches: RouteObject[] = useMatches();

    useEffect(() => {
        const lastMatchWithTitle = [...matches].reverse().find(match => match.handle.title)

        if(lastMatchWithTitle){
            document.title = `${lastMatchWithTitle.handle.title} | Avanoria AB`
        }

    }, [matches])

  return (
    <div className="center-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CenterLayout;
