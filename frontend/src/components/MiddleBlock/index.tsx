import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface MiddleBlockProps {
  title: string;
  imageURL: string;
  button: string;
  name: string; // Expecting the dynamic 'name' prop
  t: TFunction;
}

const MiddleBlock = ({ title, imageURL, button, name, t }: MiddleBlockProps) => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // Set the localStorage item 'course-name' to the dynamic 'name' prop value
    localStorage.setItem("course-name", name);
    
    // Navigate to the desired route (in this case, "../course")
    navigate("../course");
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" style={{ backgroundColor: '#e3ccbc' }}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h5>{t(title)}</h5>
              <img src={imageURL} alt="Middle Block Image" />
              {button && (
                <Button name="submit" onClick={handleButtonClick}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
