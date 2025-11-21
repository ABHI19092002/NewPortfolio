import { Button } from "@radix-ui/themes";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Form } from "radix-ui";

export const Contact = () => {
  return (
    <div id="contact" className="mx-3 p-2 my-5 md:mx-20">
      <h1 className="font-[Oswald] underline decoration-lime-300 underline-offset-9 text-3xl pb-4 mt-4 mb-2 md:text-5xl">
        LET'S CONNECT
      </h1>
      <h5 className="text-gray-400 mt-10 font-[Inter] text-left text-[16px] md:text-xl">
        Say hello at{" "}
        <a
          className="text-white underline decoration-lime-300 underline-offset-9"
          href="mailto:gaikwadabhishek283@gmail.com"
        >
          gaikwadabhishek283@gmail.com
        </a>
        .
      </h5>

      <h5 className="text-gray-400 font-[Inter] text-left text-[16px] mt-8 md:text-xl">
        For more info, you can find me on any of the social platforms below —
        I’m pretty much everywhere
      </h5>

      <div className="mt-10 flex flex-wrap gap-3 justify-between">
        <Button radius="full" variant="ghost">
          <a href="https://www.linkedin.com/in/abhishek-gaikwad-8a177321b/">
            <FaLinkedinIn color="#bbf451" className="text-3xl md:text-5xl" />
          </a>
        </Button>
        <Button radius="full" variant="ghost">
          <a href="https://github.com/ABHI19092002">
            <FaGithub color="#bbf451" className="text-3xl md:text-5xl" />
          </a>
        </Button>
        <Button radius="full" variant="ghost">
          <a href="https://www.instagram.com/abhi_gaikwad222/">
            <FaInstagram color="#bbf451" className="text-3xl md:text-5xl" />
          </a>
        </Button>
        <Button radius="full" variant="ghost">
          <a href="https://wa.link/9mz5gr">
            <FaWhatsapp color="#bbf451" className="text-3xl md:text-5xl" />
          </a>
        </Button>
        <Button radius="full" variant="ghost">
          <a href="https://t.me/abhigaikwad018">
            <FaTelegramPlane color="#bbf451" className="text-3xl md:text-5xl" />
          </a>
        </Button>
      </div>

      <Form.Root
        className="mt-15"
        action="https://formspree.io/f/xpznjnkd"
        method="POST"
      >
        <Form.Field className="FormField" name="name">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Name</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your name
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="email" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="subject">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Subject</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a subject
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Textarea" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="message">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Message</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your message
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea rows={7} className="bg-gray-800 Textarea" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button type="submit" className="Button" style={{ marginTop: 10 }}>
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
