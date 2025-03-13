import React from "react";
import Tab from "./tab";
const faqs = [
  {
    title: "How much do you charge",
    content:
      "We offer recording, editing, mixing and mastering starting at $30/hr always with an engineer.",
  },
  {
    title: "Do you have discounted rates?",
    content: "We offer discounts for morning and weeknight sessions.",
  },
  {
    title: "Do all sessions come with an engineer?",
    content:
      "We always provide and engineer who is well-versed in recording, mixing and mastering. There is no additional cost for the engineer.",
  },
  {
    title: "Do you have a minmum booking time?",
    content:
      "We have a 2 hour minimum hour session time. We offer sessions up to 12 hours—availability on the longer sessions is limited.",
  },
  {
    title: "Do you mix and master? In the same session?",
    content:
      "Yes, we mix and master in session. You can dedicate as much of your session time to recording, or editing, or mixing, or mastering as you choose—all in the same session.",
  },
  {
    title: "Can I use my own engineer?",
    content:
      "Our hourly rate is $35/hour even if you bring your own engineer as we’re always required to have one of our staff members present as long as the studios are in use. We do not sublet our rooms to other businesses or engineers charging clients.",
  },
  {
    title: "What types of recording services do you offer?",
    content:
      "We strictly offer vocal services at our NYC recording studios. Please contact us / Sound Studios, if you have any questions before booking. Our recording studios in Manhattan NYC are dedicated to providing top-quality vocal services.",
  },
  {
    title: "Can I use my own engineer?",
    content:
      "Our hourly rate is $35/hour even if you bring your own engineer as we’re always required to have one of our staff members present as long as the studios are in use. We do not sublet our rooms to other businesses or engineers charging clients.",
  },
  {
    title: "Can I record covers or does it have to be original music?",
    content:
      "We will record whatever you like—original music, covers, poetry, spoken word etc. As long as it is a vocal recording we can do it.",
  },
  {
    title: "Can I just mix or master in my session?",
    content:
      "You can dedicate as much of your session time to recording, or editing, or mixing, or mastering as you choose. You can use your whole time to just mix, master, record, edit, whatever you like.",
  },
  {
    title: "Can I get stems of my music?",
    content:
      "Your files belong to you, we can make stems but only during session time as they are time consuming to make. Just be sure to let the engineer know in session you want stems and the time will be set aside to make them. IF not in session we require another session booking for the creating of stems.",
  },
  {
    title: "Can I bring my own beats/music?",
    content:
      "Absolutely, as we do not offer production services we expect clients to provide their own beats/music. We can download beats/music from YouTube—we are able to help clients find suitable tracks if wanted. External hard drives, USB sticks and email are also fine for providing files.",
  },
];

const Faq = () => {
  const faqList = faqs.map((faq, index) => <Tab key={index} faq={faq} />);
  return (
    <section className="flex flex-col gap-16">
      <div className="container flex flex-col gap-16 mx-auto px-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="title text-4xl font-bold text-primary">Quick FAQs</h1>
        </div>
        <div className="container max-w-screen-lg mx-auto">
          <div className="columns-1 md: column-2 lg:columns-2 gap-8">
            {faqList}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p>Have more questions? Get in touch with us,</p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
