import { useReducer, useState } from "react";
import cars from "../Data/cars";

const MIN_YEAR = 1950;
const MAX_YEAR = 1979;

const initialState = {
  cars: cars.filter(
    (car) => Number(car.year) >= MIN_YEAR && Number(car.year) <= MAX_YEAR
  ),
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };

    case "UPDATE":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
      };

    case "DELETE":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    default:
      return state;
  }
}

const emptyForm = {
  brand: "",
  name: "",
  year: "",
  category: "",
  price: "",
  engine: "",
  transmission: "",
};

function ManageCars() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateForm = () => {
    if (
      !form.brand ||
      !form.name ||
      !form.year ||
      !form.category ||
      !form.price
    ) {
      return "Please fill in all required fields.";
    }

    const year = Number(form.year);

    if (year < MIN_YEAR || year > MAX_YEAR) {
      return "Only vintage cars from 1950 to 1979 are allowed.";
    }

    if (Number(form.price) <= 0) {
      return "Price must be greater than zero.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const carData = {
      id: editingId || Date.now(),
      brand: form.brand,
      name: form.name,
      year: Number(form.year),
      category: form.category,
      price: Number(form.price),
      engine: form.engine || "Classic petrol engine",
      transmission: form.transmission || "Manual",
      description: `A remarkable ${form.year} ${form.brand} ${form.name} from the golden age of motoring.`,
      image:
        "https://images.unsplash.com/photo-1586873170054-fbaef30326da?auto=format&fit=crop&w=1200&q=85",
    };

    if (editingId) {
      dispatch({
        type: "UPDATE",
        payload: carData,
      });
    } else {
      dispatch({
        type: "ADD",
        payload: carData,
      });
    }

    setForm(emptyForm);
    setEditingId(null);
    setError("");
  };

  const handleEdit = (car) => {
    setEditingId(car.id);

    setForm({
      brand: car.brand || "",
      name: car.name || "",
      year: car.year || "",
      category: car.category || "",
      price: car.price || "",
      engine: car.engine || "",
      transmission: car.transmission || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this automobile from the archive?"
    );

    if (confirmed) {
      dispatch({
        type: "DELETE",
        payload: id,
      });
    }
  };

  const filteredCars = state.cars.filter((car) => {
    const text = `${car.brand} ${car.name} ${car.year}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <main className="admin-page">

      {/* HEADER */}

      <section className="admin-header">

        <div>
          <span className="eyebrow">PRIVATE ARCHIVE</span>

          <h1>
            Manage
            <br />
            <em>Collection.</em>
          </h1>

          <p>
            Add, edit and remove automobiles from the Vintage Motors
            private archive.
          </p>
        </div>

        <div className="admin-stat">
          <strong>{state.cars.length}</strong>
          <span>ARCHIVED AUTOMOBILES</span>
        </div>

      </section>

      {/* FORM */}

      <section className="admin-form-section">

        <div className="admin-section-heading">
          <span className="eyebrow">
            {editingId ? "EDIT AUTOMOBILE" : "ADD AUTOMOBILE"}
          </span>

          <h2>
            {editingId ? "Update the Archive." : "Add to the Archive."}
          </h2>
        </div>

        <form className="admin-form" onSubmit={handleSubmit}>

          <div className="admin-form-grid">

            <div className="admin-field">
              <label>BRAND *</label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="e.g. Chevrolet"
              />
            </div>

            <div className="admin-field">
              <label>MODEL *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Bel Air"
              />
            </div>

            <div className="admin-field">
              <label>YEAR *</label>
              <input
                name="year"
                type="number"
                min="1950"
                max="1979"
                value={form.year}
                onChange={handleChange}
                placeholder="1950 - 1979"
              />
            </div>

            <div className="admin-field">
              <label>CATEGORY *</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="Grand Tourer">Grand Tourer</option>
                <option value="Muscle Car">Muscle Car</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Luxury">Luxury</option>
                <option value="Classic">Classic</option>
                <option value="Rally">Rally</option>
              </select>
            </div>

            <div className="admin-field">
              <label>VALUE *</label>

              <input
                name="price"
                type="number"
                min="1"
                value={form.price}
                onChange={handleChange}
                placeholder="75000"
              />
            </div>

            <div className="admin-field">
              <label>ENGINE</label>

              <input
                name="engine"
                value={form.engine}
                onChange={handleChange}
                placeholder="e.g. 4.6L V8"
              />
            </div>

            <div className="admin-field">
              <label>TRANSMISSION</label>

              <input
                name="transmission"
                value={form.transmission}
                onChange={handleChange}
                placeholder="e.g. 4-Speed Manual"
              />
            </div>

          </div>

          {error && <div className="admin-error">{error}</div>}

          <div className="admin-form-actions">

            <button type="submit" className="gold-button">
              {editingId ? "UPDATE AUTOMOBILE →" : "ADD TO ARCHIVE →"}
            </button>

            {editingId && (
              <button
                type="button"
                className="admin-cancel"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                  setError("");
                }}
              >
                CANCEL
              </button>
            )}

          </div>

        </form>

      </section>

      {/* COLLECTION */}

      <section className="admin-collection">

        <div className="admin-toolbar">

          <div>
            <span className="eyebrow">ARCHIVE INDEX</span>

            <h2>Automobiles</h2>
          </div>

          <input
            className="admin-search"
            type="search"
            placeholder="Search archive..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>YEAR</th>
                <th>AUTOMOBILE</th>
                <th>CATEGORY</th>
                <th>VALUE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {filteredCars.map((car) => (

                <tr key={car.id}>

                  <td>
                    <span className="admin-year">
                      {car.year}
                    </span>
                  </td>

                  <td>
                    <strong>
                      {car.brand} {car.name}
                    </strong>
                  </td>

                  <td>{car.category}</td>

                  <td>
                    ${Number(car.price).toLocaleString()}
                  </td>

                  <td>

                    <div className="admin-actions">

                      <button
                        onClick={() => handleEdit(car)}
                        className="edit-button"
                      >
                        EDIT
                      </button>

                      <button
                        onClick={() => handleDelete(car.id)}
                        className="delete-button"
                      >
                        DELETE
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {filteredCars.length === 0 && (
            <div className="admin-empty">
              No automobiles found in the archive.
            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default ManageCars;