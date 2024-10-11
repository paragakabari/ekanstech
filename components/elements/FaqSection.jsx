import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FaqSection({faqs, title}) {
  return (
    <div style={{ padding: '70px 0px 0px 0px'  }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: 'bold', color: '#333', fontFamily:"'__Fredoka_91bab0', '__Fredoka_Fallback_91bab0'", marginBottom: '30px' }}
      >
        {title} FAQs
      </Typography>

      {/* Dynamically mapping over the faqs array */}
      {faqs.map((faq, index) => (
        <Accordion 
          key={index}
          sx={{ 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            marginBottom: '20px' 
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#68cbf4', fontSize:"30px" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ padding: '10px 20px' }}
          >
            <Typography sx={{ fontWeight: '500', fontFamily:"'__Fredoka_91bab0', '__Fredoka_Fallback_91bab0'", color: '#333', fontSize: "16px" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '20px', color: '#666' }}>
            <Typography sx={{ fontFamily:"'__Fredoka_91bab0', '__Fredoka_Fallback_91bab0'" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
