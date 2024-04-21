import styled from 'styled-components';

const Child = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
`;

const FirstChild = styled(Child)`
  background-color: ${({ theme }) => theme.palette.primary10};
  color: ${({ theme }) => theme.palette.primary100};
`;

const SecondChild = styled(Child)`
  background-color: ${({ theme }) => theme.palette.success10};
  color: ${({ theme }) => theme.palette.success100};
`;

const ThirdChild = styled(Child)`
  background-color: ${({ theme }) => theme.palette.danger10};
  color: ${({ theme }) => theme.palette.danger100};
`;

export const coloredChildren = (
  <>
    <FirstChild>1</FirstChild>
    <SecondChild>2</SecondChild>
    <ThirdChild>3</ThirdChild>
  </>
);
