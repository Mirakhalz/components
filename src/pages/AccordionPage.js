import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id:'Rand1',
            label: 'Can I use React on a project',
            content: 'Yes, you can use React on any project you want'
        },

        {
            id:'Rand2',
            label: 'Can I use Javascript on a project',
            content: 'Yes, you can use Javascript on any project you want'
        },

        {
            id: 'Rand3',
            label: 'Can I use CSS on a project',
            content: 'Yes, you can use CSS on any project you want'
        }
    ]

    return <Accordion items={items}/>;
    
}

export default AccordionPage;
