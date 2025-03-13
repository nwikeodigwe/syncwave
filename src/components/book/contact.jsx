import Map from "./map";

const Contact = () => {
  return (
    <div className="md:grid grid-cols-7 grid-cols-1 md:shadow-md bg-primary/10 mt-16">
      <div className="col-span-3 flex flex-col gap-10 p-10">
        <div>
          <h2 className="font-bold text-primary">Address</h2>
          <p>105 Victoria Road, Woodstock, Cape Town, South Africa</p>
        </div>
        <div>
          <h2 className="font-bold text-primary">Hours</h2>
          <p>24 Hours a day, 7 days a week</p>
        </div>
        <div>
          <h2 className="font-bold text-primary">Phone</h2>
          <p>+27 73 416 8269</p>
          <p>+233 208 761612</p>
        </div>
        <div>
          <h2 className="font-bold text-primary       ">Email</h2>
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
