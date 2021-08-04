import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Book } from 'react-bootstrap-icons';

class Education extends React.Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 – Actualmente"
          iconStyle={{ background: 'rgb(28, 45, 80)', color: '#fff' }}
          icon={<Book color="White" size={50} />}
        >
          <h3 className="vertical-timeline-element-title teme-color">Ingenierian En Informatica</h3>
          <h4 className="vertical-timeline-element-subtitle teme-color">Ceutec</h4>
          <p className="teme-color">
            San Pedro Sula, Cortés, Honduras
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 – 2020"
          iconStyle={{ background: 'rgb(28, 45, 80)', color: '#fff' }}
          icon={<Book color="White" size={50} />}
        >
          <h3 className="vertical-timeline-element-title teme-color">Diseño Y Desarrollo Web</h3>
          <h4 className="vertical-timeline-element-subtitle teme-color">Ceutec</h4>
          <p className="teme-color">
            San Pedro Sula, Cortés, Honduras
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 – 2017"
          iconStyle={{ background: 'rgb(28, 45, 80)', color: '#fff' }}
          icon={<Book color="White" size={50} />}
        >
          <h3 className="vertical-timeline-element-title teme-color">B.T.P. En Informatica</h3>
          <h4 className="vertical-timeline-element-subtitle teme-color">Instituto Gubernamental El Zapotal</h4>
          <p className="teme-color">
            El Zapotal Del Norte, San Pedro Sula, Cortés, Honduras
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 – 2011"
          iconStyle={{ background: 'rgb(28, 45, 80)', color: '#fff' }}
          icon={<Book color="White" size={50} />}
        >
          <h3 className="vertical-timeline-element-title teme-color">Primaria</h3>
          <h4 className="vertical-timeline-element-subtitle teme-color">Escuela Pompilio Ortega</h4>
          <p className="teme-color">
            El Zapotal Del Norte, San Pedro Sula, Cortés, Honduras
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}
export default Education;