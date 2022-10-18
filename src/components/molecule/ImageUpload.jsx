import ImageUploading from "react-images-uploading";

import useAppContext from "../../hooks/useAppContext";

import styles from "../../../styles/components/molecule/ImageUpload.module.css";
import HandleCRUD from "../../Handlers/HandleCRUD";

const ImageUpload = () => {
  const { state } = useAppContext();
  const { handleImageChange } = HandleCRUD();
  const { formReducers } = state;
  const maxNumber = 1;

  return (
    <div>
      <ImageUploading
        multiple
        value={formReducers.image}
        onChange={handleImageChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({ onImageUpload, isDragging, dragProps }) => (
          <div>
            <button
              style={isDragging ? { color: "red" } : null}
              className={styles.button}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
