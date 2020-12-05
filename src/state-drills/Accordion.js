import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [
            {
              title: 'Section 1',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
              title: 'Section 2',
              content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
              title: 'Section 3',
              content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
          ]
    }

    state = {
        activeSectionIdx: null,
    }

    //If a section is clicked on its index is recorded for use
    handleActivateSection = (sectionIndex) => {
        
        this.setState({activeSectionIdx: sectionIndex})
    }
    //Is used to render a section
    renderedSection(section, index) {
        return (
            <li className='accordionSection' key={index}>
                <button type='button' onClick={() => this.handleActivateSection(index)}>
                    {section.title}
                </button>
                { this.state.activeSectionIdx===index && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIdx } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) => 
                    this.renderedSection(section,idx,activeSectionIdx))}
            </ul>
        )
    }
}

export default Accordion