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
  const [nbr_personne, setNbr_personne] = useState("");
  const status = 'non_reservé';
  const clientId = null;
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
      data.append('status', status);
      data.append('clientId', clientId);
      data.append('nbr_personne', nbr_personne);
      if (file) data.append("file", file);
      data.append('video', video);
      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    } else {
      alert("Veuillez entrer une description brève de votre offre")
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
    <>
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
        <MDBContainer>
    <MDBRow>
      <MDBCol md="12">
        <MDBCard >
          <MDBCardBody>
            <p style={{backgroundColor:'#ff9f1a'}}>Déposer votre annonce</p>
            <form action="">
              <div className="grey-text">
                <MDBInput
                required
                  label="titre"
                  type="text"
                  name="titre"
                  id="titre"
                  onChange={(e) => setTitre(e.target.value)}
                  value={titre}
                />
                 <MDBInput
                 required
                  label="type"
                  type="text"
                  name="ttype"
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                />
                 <MDBInput
                  label="superficie"
                  type="number"
                  name="superficie"
                  id="superficie"
                  onChange={(e) => setSuperficie(e.target.value)}
                  value={superficie}
                />
                <MDBInput
                required
                  label="codepostal"
                  type="number"
                  name="codepostal"
                  id="codepostal"
                  onChange={(e) => setCodepostal(e.target.value)}
                  value={codepostal}
                />
                <MDBInput
                required
                  label="localisation"
                  type="text"
                  name="localisation"
                  id="localisation"
                  onChange={(e) => setLocalisation(e.target.value)}
                  value={localisation}
                />
                <MDBInput
                required
                  label="prix"
                  type="number"
                  name="prix"
                  id="prix"
                  onChange={(e) => setPrix(e.target.value)}
                  value={prix}
                />
                <MDBInput
                required
                  label="nombre de personne"
                  type="number"
                  name="nbr_personne"
                  id="nbr_personne"
                  onChange={(e) => setNbr_personne(e.target.value)}
                  value={nbr_personne}
                />
                <MDBInput
                required
                  label="Date début de disponibilité"
                  type="date"
                  name="date_open"
                  id="date_open"
                  onChange={(e) => setDate_open(e.target.value)}
                  value={date_open}
                />
                <MDBInput
                required
                  label="Date fin de disponibilité"
                  type="date"
                  name="date_close"
                  id="date_close"
                  onChange={(e) => setDate_close(e.target.value)}
                  value={date_close}
                />
                <textarea 
                  class="form-control rounded-0" 
                  id="exampleFormControlTextarea2" 
                  rows="3"
                  name="message"
                  id="message"
                  placeholder="Décrivez votre offre..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <div className="footer-form">
                  <div className="icon">
                    {isEmpty(video) && (
                      <>
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
                      <MDBBtn onClick={() => setVideo("")}>Supprimer video</MDBBtn>
                    )}
                  </div>
                  {!isEmpty(error.format) && <p>{error.format}</p>}
                  {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
                  <div className="btn-send">
                    {message || selectedImages || video.length > 20 ? (
                      <MDBBtn className="cancel" onClick={cancelPost}>
                        Annuler la plublication
                      </MDBBtn>
                    ) : null}
                    <MDBBtn type="submit" onClick={handlePost}>
                      Envoyer
                    </MDBBtn>
                  </div>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
        <MDBCard>
            <MDBCardBody>
              <p style={{backgroundColor:'#ff9f1a'}}>Aperçu des images</p>
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
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
        </>
      )}
    </>
  );
};

export default NewPostForm;
