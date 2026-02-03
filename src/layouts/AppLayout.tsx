import { useEffect } from "react";
import { Outlet, useMatches, type RouteObject } from "react-router-dom";

const AppLayout = () => {
  const matches: RouteObject[] = useMatches();

  useEffect(() => {
    const lastMatchWithTitle = [...matches]
      .reverse()
      .find((match) => match.handle.title);

    if (lastMatchWithTitle) {
      document.title = `${lastMatchWithTitle.handle.title} | Avanoria AB`;
    }
  }, [matches]);

  return (
    <div className="app-layout">
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
