import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import { Accordion } from "react-bootstrap";
import { faqs } from "../../../Constants/Index";

const FAQ = () => {
  return (
    <>
      <PageTitle heading="frequently asked questions" />

      <Section>
        <div>
          <div>
            <Accordion>
              {faqs.map((item) => (
                <Accordion.Item
                  className="my-3 shadow-sm"
                  key={item.id}
                  eventKey={item.id}
                >
                  <Accordion.Header className=" ">
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body className="">{item.anster}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQ;
