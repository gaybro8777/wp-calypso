/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Square from './square';

export default class Layout extends Component {
	renderImage( img, i ) {
		const {
			columns,
			galleryImage: Image,
			imageCrop,
			images,
			linkTo,
			onRemoveImage,
			onSelectImage,
			selectedImage,
			setImageAttributes,
		} = this.props;

		/* translators: %1$d is the order number of the image, %2$d is the total number of images. */
		const ariaLabel = __( sprintf( 'image %1$d of %2$d in gallery', i + 1, images.length ) );

		return (
			<Image
				alt={ img.alt }
				aria-label={ ariaLabel }
				caption={ img.caption }
				className="tiled-gallery__item"
				columns={ columns }
				id={ img.id }
				imageCrop={ imageCrop }
				isSelected={ selectedImage === i }
				key={ i }
				linkTo={ linkTo }
				onRemove={ onRemoveImage( i ) }
				onSelect={ onSelectImage( i ) }
				setAttributes={ setImageAttributes( i ) }
				url={ img.url }
			/>
		);
	}

	render() {
		const { children, className /*layoutStyle*/ } = this.props;

		const renderedImages = this.props.images.map( this.renderImage, this );

		return (
			<div className={ className }>
				<Square columns={ this.props.columns } renderedImages={ renderedImages } />
				{ children }
			</div>
		);
	}
}
