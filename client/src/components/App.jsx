import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/stream/new" element={<StreamCreate />} />
          <Route path="/stream/delete" element={<StreamDelete />} />
          <Route path="/stream/edit" element={<StreamEdit />} />
          <Route path="/stream/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
