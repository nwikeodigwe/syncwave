import Map from "./map";

const Contact = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-3 flex flex-col gap-10 py-10    ">
        <div>
          <h2 className="font-bold">Address</h2>
          <p>105 Victoria Road, Woodstock, Cape Town, South Africa</p>
        </div>
        <div>
          <h2 className="font-bold">Hours</h2>
          <p>24 Hours a day, 7 days a week</p>
        </div>
        <div>
          <h2 className="font-bold">Phone</h2>
          <p>+27 73 416 8269</p>
          <p>+233 208 761612</p>
        </div>
        <div>
          <h2 className="font-bold">Email</h2>
          <p>contact@example.com</p>
        </div>
      </div>
      <div className="col-span-4">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
