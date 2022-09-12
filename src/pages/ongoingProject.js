import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default function OnGoingProject(props) {
  console.log("pooo", props)
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-933',
      src: `${props.data[0].img}`,
      thumb:
        `${props.data[0].img}`,
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
    }
  ]);

  const addItem = useCallback(() => {
    setItems([
      ...items,
      {
        id: '6',
        size: '1280-720',
        src: `${props.data[1].img}`,
        thumb:
          `${props.data[1].img}`,
        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
      },
      {
        id: '2',
        size: '1400-933',
        src: `${props.data[2].img}`,
        thumb:
          `${props.data[2].img}`,
        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                <p>Published on September 14, 2016</p>
            </div>`,
      },
      {
        id: '3',
        size: '1400-932',
        src: `${props.data[3].img}`,
        thumb:
          `${props.data[3].img}`,
        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
      },
      {
        id: '4',
        size: '1400-933',
        src: `${props.data[4].img}`,
        thumb:
          `${props.data[4].img}`,
        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
                <p>Published on January 6, 2021</p>
            </div>`,
      },
      {
        id: '5',
        size: '1600-2398',
        src: `${props.data[5].img}`,
        thumb:
          `${props.data[5].img}`,
        subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
            <p>Published on January 6, 2021</p>
        </div>`,
      },
    ], [])
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
        >
          <img
            // style={{ maxWidth: '280px' }}
            className="img-responsive"
            src={item.thumb}
            onClick={addItem}
          />
        </a>
      );
    });
  }, [items]);


  useEffect(() => {
    lightGallery.current.refresh();
    console.log('videl', lgVideo);
  }, [items]);


  return (
    <div className="App">
      <LightGallery
        plugins={[lgVideo, lgZoom]}
        elementClassNames="custom-class-name"
        onInit={onInit}
      >
        {getItems()}
      </LightGallery>
    </div>
  );


}