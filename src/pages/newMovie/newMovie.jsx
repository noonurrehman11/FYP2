import "./newMovie.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
      <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Movie Title here..." />
        </div>
        <div className="addProductItem">
          <label>Release Date</label>
          <input type="date" id="date" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Movie</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Summary</label>
          <textarea id="summary" placeholder="Enter Summary here..."></textarea>
        </div>
        
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
