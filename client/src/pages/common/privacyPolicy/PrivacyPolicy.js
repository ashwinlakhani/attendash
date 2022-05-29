import { Card, Layout, Typography } from 'antd';
import React from 'react';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';
const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className="home layout">
      <HeaderNavbar />
      <Content>
        <Card>
          <Title level={2}>About the site</Title>

          {}

          <p>
            If you have additional questions or require more information about
            our site, do not hesitate to contact us.
          </p>

          <Title level={4}>What is face recogination attendance system?</Title>

          <p>
            Face Recognition Attendance System is an attendance system based on
            face recognition which automatically marks the attendance of the
            present employee on recognizing the face of an employee. Over the
            past years, attendance was done by calling the names or by signing
            the signature on the attendance paper
          </p>

          <Title level={4}>Information we collect</Title>

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>

          <Title level={4}>How we use your information</Title>

          <p>
            We use the information we collect in various ways, including to:
          </p>

          <ul>
            <li>Provide, operate, and maintain our webste</li>
            <li>Improve, personalize, and expand our webste</li>
            <li>Understand and analyze how you use our webste</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the webste, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <Title level={4}>Facial Data Privacy Policy</Title>
          <p>
            We will use your facial data to extract the features in order to
            perform facial analytics.
          </p>
          <p>
            We will use Cloudinary online image storage to save facial data and
            retrieve the CDN url for display purpose.
          </p>
          <p>
            We do not sell, advertise or publish your facial data to
            third-party.
          </p>
          <p>
            Your facial data is protected and will not be used for any illegal
            misconduct.
          </p>
          <p>
            When you upload your face photo in our website, you agree to let us
            to use your facial data and save into Cloudinary.
          </p>
        </Card>
      </Content>
      <Footer />
    </Layout>
  );
};
