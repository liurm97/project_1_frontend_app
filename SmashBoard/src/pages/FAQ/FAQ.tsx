import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-screen-xl flex flex-col mx-auto pt-16"
    >
      <AccordionItem value="item-1" className={"justify-self-stretch"}>
        <AccordionTrigger className="text-xl">
          Are you associated with the BWF organization?
        </AccordionTrigger>
        <AccordionContent className="text-gray-400 text-lg">
          No. SmashBoard is not a product of or affliated with BWF or any
          association. This is built solely for the purpose of personal project
          and learning React.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          Where is the data from?
        </AccordionTrigger>
        <AccordionContent className="text-gray-400 text-lg">
          Data is retrieved from the publicly available BWF Shuttle API
          (https://www.bwfshuttleapi.com/) <br /> On the website's FAQ page, we
          can freely make use of the available API endpoints for as long as
          credit is given to BWF Shuttle API.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl">
          Are the data up-to-date?
        </AccordionTrigger>
        <AccordionContent className="text-gray-400 text-lg">
          Data is retrieved from the publicly available BWF Shuttle API
          (https://www.bwfshuttleapi.com/) <br />
          As we understand, the data is scraped daily from BWF's Tournament
          Software website.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
