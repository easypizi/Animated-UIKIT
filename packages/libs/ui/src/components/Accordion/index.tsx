import { type FC, type ReactNode, useCallback, useState } from 'react';
import { CaretRightIcon } from '@easypizi/icons';
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  IconWrapper,
  type StyledAccordeonProps,
} from './styled';
import { Typography } from '../Typography';

export interface AccordionProps extends StyledAccordeonProps {
  children: ReactNode;
  title: ReactNode;
  opened?: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  children,
  title,
  color,
  padding,
  opened = false,
}) => {
  const [isOpen, setIsOpen] = useState(opened);

  const toggleAccordion = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  return (
    <AccordionContainer isOpen={isOpen} color={color} padding={padding}>
      <AccordionHeader onClick={toggleAccordion}>
        <IconWrapper>
          <CaretRightIcon />
        </IconWrapper>
        <Typography variant="textXSBold">{title}</Typography>
      </AccordionHeader>
      <AccordionContent className="accordion__content">
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};
