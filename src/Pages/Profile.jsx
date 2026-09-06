import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const fileInputRef = useRef(null);

  const favorites = useSelector(
    (state) => state.favorites.favorites
  );

  const [profile, setProfile] = useState({
    name: "Alexander Morgan",
    email: "collector@vintagemotors.com",
    phone: "+91 98765 43210",
    city: "Chennai, India",
  });

  const [photo, setPhoto] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    setPhoto(URL.createObjectURL(file));
  };

  const handleSave = (event) => {
    event.preventDefault();

    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="editorial-page profile-page">

      {/* HERO */}
      <section className="editorial-hero profile-editorial-hero">

        <div className="editorial-container">

          <p className="eyebrow">
            VINTAGE MOTORS · PRIVATE COLLECTOR
          </p>

          <h1>
            Your
            <br />
            <em>private archive.</em>
          </h1>

          <div className="editorial-hero-bottom">

            <p>
              A personal record of your collector information
              and favourite automobiles.
            </p>

            <span>MEMBER 01</span>

          </div>

        </div>

      </section>


      {/* PROFILE */}
      <section className="profile-editorial-content">

        <div className="editorial-container">

          <div className="profile-editorial-grid">

            {/* COLLECTOR CARD */}
            <aside className="collector-card">

              <div
                className="collector-avatar"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
              >

                {photo ? (
                  <img src={photo} alt="Collector profile" />
                ) : (
                  <span>
                    {profile.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                )}

                <small>CHANGE</small>

              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoChange}
              />

              <p className="eyebrow">PRIVATE COLLECTOR</p>

              <h2>{profile.name}</h2>

              <div className="collector-line" />

              <div className="collector-stats">

                <div>
                  <strong>
                    {String(favorites.length).padStart(2, "0")}
                  </strong>
                  <span>SAVED CARS</span>
                </div>

                <div>
                  <strong>30</strong>
                  <span>ARCHIVE YEARS</span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>MEMBERSHIP</span>
                </div>

              </div>

              <Link
                to="/favorites"
                className="collector-garage-link"
              >
                Enter My Garage →
              </Link>

            </aside>


            {/* DETAILS */}
            <div className="collector-details">

              <div className="collector-heading">

                <div>

                  <p className="eyebrow">
                    COLLECTOR RECORD
                  </p>

                  <h2>
                    Personal
                    <br />
                    <em>details.</em>
                  </h2>

                </div>

                {!editing && (
                  <button
                    type="button"
                    className="text-action"
                    onClick={() => setEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}

              </div>


              {saved && (
                <div className="profile-success-premium">
                  ✓ Collector profile updated successfully.
                </div>
              )}


              <form
                className="collector-form"
                onSubmit={handleSave}
              >

                <div className="collector-form-grid">

                  <div>
                    <label>FULL NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                    />
                  </div>

                  <div>
                    <label>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                    />
                  </div>

                  <div>
                    <label>PHONE NUMBER</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                    />
                  </div>

                  <div>
                    <label>LOCATION</label>
                    <input
                      type="text"
                      name="city"
                      value={profile.city}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                    />
                  </div>

                </div>


                {editing && (

                  <div className="collector-form-actions">

                    <button
                      type="button"
                      className="text-action"
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="editorial-button"
                    >
                      Save Changes →
                    </button>

                  </div>

                )}

              </form>


              {/* MEMBERSHIP */}
              <div className="membership-register">

                <div>
                  <p className="eyebrow">MEMBERSHIP</p>
                  <h3>Private Collector</h3>
                </div>

                <span>VM</span>

                <div className="membership-bottom">
                  <small>VINTAGE MOTORS</small>
                  <small>EST. 1955</small>
                </div>

              </div>


              {/* LINKS */}
              <div className="collector-links">

                <Link to="/collection">
                  <span>01</span>
                  <div>
                    <strong>Explore Collection</strong>
                    <small>Browse the vintage archive</small>
                  </div>
                  <b>→</b>
                </Link>

                <Link to="/favorites">
                  <span>02</span>
                  <div>
                    <strong>Private Garage</strong>
                    <small>View your saved automobiles</small>
                  </div>
                  <b>→</b>
                </Link>

                <Link to="/contact">
                  <span>03</span>
                  <div>
                    <strong>Private Concierge</strong>
                    <small>Speak with our collection team</small>
                  </div>
                  <b>→</b>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Profile;