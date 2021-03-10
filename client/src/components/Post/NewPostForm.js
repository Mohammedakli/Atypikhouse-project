import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utilitaires";
import { addPost, getPosts } from "../../actions/postAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';



const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [titre, setTitre] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [prix, setPrix] = useState("");
  const [date_open, setDate_open] = useState("");
  const [date_close, setDate_close] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [codepostal, setCodepostal] = useState("");
  const [type, setType] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState([]);
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.postError);
  const dispatch = useDispatch();

  const [selectedImages, setSelectedImages] = useState([])
  const imageHandleChange = (e) => {
      console.log(e.target.files)
      if(e.target.files) {
        const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
        console.log(fileArray);
        setSelectedImages((prevImages) =>prevImages.concat(fileArray));
        setFile(e.target.files[0]);
        setVideo('');
        console.log(file)
        Array.from(e.target.files).map(
          (file)=>URL.revokeObjectURL(file)
        );
      }
  };
  const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img height="200px" width="50%" src={photo} alt="" key={photo} />;
		});
	};
  /*
  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo('');
  }; 
  */

  const handlePost = async () => {
    if (message || postPicture || video) {
      const data = new FormData();
      data.append('posterId', userData._id);
      data.append('message', message);
      data.append('titre', titre);
      data.append('superficie', superficie);
      data.append('prix', prix);
      data.append('date_open', date_open);
      data.append('date_close', date_close);
      data.append('localisation', localisation);
      data.append('codepostal', codepostal);
      data.append('type', type);
      if (file) data.append("file", file);
      data.append('video', video);
      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    } else {
      alert("Veuillez entrer un message")
    }
  };
 
  const cancelPost = () => {
    setMessage("");
    setTitre("");
    setSuperficie("");
    setPrix("");
    setDate_open("");
    setDate_close("");
    setLocalisation("");
    setCodepostal("");
    setType("");
    setPostPicture("");
    setVideo("");
    setFile("");
    setSelectedImages("");
  };


  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);

    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setPostPicture('');
        }
      }
    };
    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
        <MDBContainer><bcomplexe r />
            <MDBRow>

              <MDBCol md="12">
                <MDBCard>
                  <MDBCardBody>
          <div className="row">
            <div className="col-6">
              <h4 style={{backgroundColor:'#ff9f1a'}}>Déposer votre annonce</h4>
          <div className="form">
            <br/>
            
            <br/>
            <div className="row">
                <div className="col-6">
                  <label htmlFor="titre">Titre de l'annonce :</label>
                  <br/>
                  <input
                    type="text"
                    name="titre"
                    id="titre"
                    placeholder="Votre titre ?"
                    onChange={(e) => setTitre(e.target.value)}
                    value={titre}
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="type">Type :</label>
                  <br/>
                  <MDBInput
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Quelle Type ?"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                  />
                </div>
            </div>
            <div className="row">
                  <div className="col-6">
                    <label htmlFor="superficie">Superficie (m²) :</label>
                    <br/>
                    <input
                      type="number"
                      name="superficie"
                      id="superficie"
                      placeholder="Quelle est la superficie de l'habitat ?"
                      onChange={(e) => setSuperficie(e.target.value)}
                      value={superficie}
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="codepostal">Code postal :</label>
                    <br/>
                    <input
                      type="number"
                      name="codepostal"
                      id="codepostal"
                      placeholder="Code postal ?"
                      onChange={(e) => setCodepostal(e.target.value)}
                      value={codepostal}
                    />
                  </div>
              </div>
            <div className="col-11">
              <label htmlFor="localisation">Localisation :</label>
              <br/>
              <input
                type="text"
                name="localisation"
                id="localisation"
                placeholder="Localisation ?"
                onChange={(e) => setLocalisation(e.target.value)}
                value={localisation}
              />
            </div>
            <div className="row">
              <div className="col-6">
              <label htmlFor="prix">Prix (€) :</label>
              <br/>
              <input
                type="number"
                name="prix"
                id="prix"
                placeholder="Coût ?"
                onChange={(e) => setPrix(e.target.value)}
                value={prix}
              />
            </div>
            <div className="col-5">
              <label htmlFor="nbr_personne"> Capacité de reception :</label>
              <br/>
              <input
                type="number"
                name="nbr_personne"
                id="nbr_personne"
                placeholder="Pour combien de personne max?"
                onChange={(e) => setPrix(e.target.value)}
                
              />
            </div>
            </div>
            <div className="row">
              <div className="11">
              <label htmlFor="date_open">Date de debut de reception :</label>
              <br/>
              <input
                type="date"
                name="date_open"
                id="date_open"
                onChange={(e) => setDate_open(e.target.value)}
                value={date_open}
              />
              </div>
              </div>
              <div className="row">
              <hr/>{"   "}
              <div className="11">
              <label htmlFor="date_close">Date de fin de reception :</label>
              <br/>
              <input
                type="date"
                name="date_close"
                id="date_close"
                onChange={(e) => setDate_close(e.target.value)}
                value={date_close}
              />
              </div>
            <div>
              <label htmlFor="message">Décrivez votre bien :</label>
              <br/>
              <textarea
                rows="20" cols="50"
                name="message"
                id="message"
                placeholder="Votre commentaire..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            </div>
            
            
            
            
            
            
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="img" />
                    <input
                      multiple
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={imageHandleChange}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || selectedImages || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button  className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="col-6" style={{borderLeft:"2px solid black", }}>
            <h4 style={{backgroundColor:'#ff9f1a'}}>Images</h4>
                {message || selectedImages || video.length > 20 ? (
              
              <div className="right">
                  <div className="content">
                    <div className="row">
                      {renderPhotos(selectedImages)}
                    </div>
                    
                    {video && (
                      <iframe
                         src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
              </div>
            
            ) : null}
          </div>
          </div>
          </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      )}
    </div>
  );
};

export default NewPostForm;
