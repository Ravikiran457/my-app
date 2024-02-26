import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SchoolLists = ({ schools }) => {

    const styleAccordion = {
        padding: "100px",
        height: "300px",
        overflow: "scroll"
      };
    return (
        <>
            <section>
                    <section>
                        <h3>Schools List</h3>
                    </section>
                    <section style={ styleAccordion }>
                        {schools.map((school) => (
                            <Accordion key={school.dbn}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {school.school_name}
                                </AccordionSummary>
                                <AccordionDetails>
                                {school.overview_paragraph}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </section>
            </section>
        </>
    );
};

export default SchoolLists;