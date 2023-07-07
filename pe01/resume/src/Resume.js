import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Description from "./Description";
import SmallHeading from "./SmallHeading";
import "./Resume.css";
function Resume() {
  return (
    <>
      <Heading>Joshua Emery</Heading>
      <SubHeading>Contact Information:</SubHeading>
      <Description>jemery@rtc.edu</Description>
      <Description>2023 Aberdeen Ave SE Renton, WA 98055</Description>
      <SubHeading>Education:</SubHeading>
      <SmallHeading>BAS Application Development:</SmallHeading>
      <Description>Renton Technical College - June 2020</Description>
      <Description>GPA - 3.9</Description>
      <SmallHeading>AAS Computer Science</SmallHeading>
      <Description>Renton Technical College - June 2018</Description>
      <Description>GPA - 3.9</Description>
      <SubHeading>Work Experience:</SubHeading>
      <SmallHeading>Renton Technical College</SmallHeading>
      <Description>Computer Science Instructor 2021-Present</Description>
      <SmallHeading>Auburn Food Bank</SmallHeading>
      <Description>Full Stack .Net Developer 2020-Present</Description>
      <SmallHeading>Renton Technical College</SmallHeading>
      <Description>Peer Tutor - Computer Science 2018-202</Description>
      <SubHeading>Skills</SubHeading>
      <Description>
        Programming Languages: C#, Java, JavaScript, Python
      </Description>
      <Description>Database Technologies: Sql Server, MySQL</Description>
    </>
  );
}
export default Resume;
