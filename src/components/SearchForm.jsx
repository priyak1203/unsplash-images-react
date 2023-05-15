const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="cat" className="search-input" />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
