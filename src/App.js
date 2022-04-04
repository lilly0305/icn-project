import { GoogleDocs } from "components/google-editor/GoogleDocs";
import { Main } from "components/Main";
import { Link, Route, Routes } from "react-router-dom";

import 'components/scss/reset.scss';
import { LoadMore } from "components/load-more/LoadMore";
import { Like } from "components/like/Like";
import { DynamicRouting } from "components/dynamic-routing/DynamicRouting";
import RoutingDetail from "components/dynamic-routing/RoutingDetail";
import Random from "components/random/Random";
import { AxiosLogin } from "components/axios-login/AxiosLogin";
import { GroceryList } from "components/input-list/GroceryList";

import 'components/scss/common.scss';
import CssColorTemplate from "components/input-list/css-colors/CssColorTemplate";
import ReactHookForm from "components/react-hook-form/ReactHookForm";
import ReactModal from "components/react-modal/ReactModal";

function App() {
  return (
    <div className="App">
      <Link to="/" className="backToHome">홈</Link>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/google-editor" element={<GoogleDocs />} />
        <Route path="/load-more" element={<LoadMore />} />
        <Route path="/like" element={<Like />} />

        <Route path="/dynamic-routing" element={<DynamicRouting />} />
        <Route path="/dynamic-routing/:itemId" element={<RoutingDetail />} />
        <Route path="/axios-login" element={<AxiosLogin />} />
        <Route path="/hook-form" element={<ReactHookForm />} />

        <Route path="/random" element={<Random />} />
        <Route path="/list-input" element={<GroceryList />} />
        <Route path="/css-colors" element={<CssColorTemplate />} />

        <Route path="/react-modal" element={<ReactModal />} />

      </Routes>

    </div>
  );
}

export default App;
