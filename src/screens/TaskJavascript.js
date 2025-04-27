import React, { useState } from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';

const LINK = 'http://onramp.money/';


const IOS_ARTICLES = {
   id: 6,
   label: 'iOS Articles',
   link: LINK,
   children: [
       {
           id: 23,
           label: 'VPN with iOS',
           link: LINK
       },
       {
           id: 24,
           label: 'Upgrade iOS',
           link: LINK
       }
   ]
};


const MAC_ARTICLES = {
   id: 12,
   label: 'Mac Articles',
   link: LINK,
   children: [
       {
           id: 29,
           label: 'Fix macOS',
           link: LINK
       },
       {
           id: 41,
           label: 'Upgrade macOS',
           link: LINK
       }
   ]
};


const REQUEST_LICENSE = {
   id: 67,
   label: 'Request License',
   link: LINK
};


const PURCHASE_APPS = {
   id: 69,
   label: 'Purchase Apps',
   link: LINK
};


const APPLE = {
   id: 5,
   label: 'Apple',
   link: LINK,
   children: [IOS_ARTICLES, MAC_ARTICLES, REQUEST_LICENSE, PURCHASE_APPS]
};


const ACADEMIC_TECHNOLOGIES = {
   id: 1,
   label: 'Academic Technologies',
   link: LINK,
   children: [
       {
           id: 2,
           label: 'Lightboard',
           link: LINK
       },
       {
           id: 3,
           label: 'OWL 360 Camera Tutorial',
           link: LINK
       },
       {
           id: 4,
           label: 'ScreenPal',
           link: LINK
       }
   ]
};


const DATA = [
   {
       id: 1001,
       label: 'Knowledge Base Articles',
       link: LINK,
       children: [ACADEMIC_TECHNOLOGIES, APPLE]
   },
   {
       id: 201,
       label: 'Devtools Tech',
       link: LINK
   }
];
    

const TaskJavascript = () => {
        const filterFunction = (array, parentID = "0", parentPath = "0") =>{
            let myArr = [];

            array.forEach( item =>{
                let currentPath = `${parentPath} > ${item.id}`;
                myArr.push({
                    "label": item.label,
                    "id": item.id,
                    "parentID": parentID,
                    "treePath": currentPath
                });
                if (item.children) {
                    myArr = myArr.concat(filterFunction(item.children, item.id, currentPath));
                }
                
            })
            return myArr;
        }

        const filterData = filterFunction(DATA);

        const [expanded, setExpanded] = useState({});

        const toggleExpand = (id) => {
            setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
        };

        const renderList = (items, level = 0) => {
            if (!items || !Array.isArray(items)) return null;

            return items.map((item) => (
            <div key={item.id} style={{ paddingLeft: level * 15 }}>
                <ListGroup.Item
                style={{
                    backgroundColor: level === 0 ? '#f8f9fa' : '#ffffff',
                    borderRadius: '5px',
                    marginBottom: '5px',
                    transition: 'background 0.3s ease',
                    textAlign:'left'
                }}
                >
                {item.children ? (
                    <Button
                    variant="link"
                    onClick={() => toggleExpand(item.id)}
                    style={{
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: '#007bff',
                        transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
                    onMouseLeave={(e) => (e.target.style.color = '#007bff')}
                    >
                    {expanded[item.id] ? '▼' : '▶'} {item.label}
                    </Button>
                ) : (
                    <> {item.label}</>
                )}
                </ListGroup.Item>

                {expanded[item.id] && item.children && (
                <ListGroup>{renderList(item.children, level + 1)}</ListGroup>
                )}
            </div>
            ));
        };

  return (
    <div className="container mt-4">
        <div className='col-lg-4'>
            <Card className="shadow-lg" style={{ borderRadius: '10px' }}>
                <Card.Header className="bg-primary text-white text-center">
                <h5 className="mb-0">Knowledge Base</h5>
                </Card.Header>
                <Card.Body>
                <ListGroup>{renderList(DATA)}</ListGroup>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default TaskJavascript;