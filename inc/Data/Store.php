<?php

namespace LGraphQL\Data;

use LGraphQL\Model\IModel;
use LGraphQL\Model\Model;

class Store {
	protected static $author = null;

	protected static $book = null;

	public static function Author(): IModel {
		if ( self::$author === null ) {
			// TODO: Get author data from JSON
			$author_data = [];
			self::$author = new Model( $author_data );
		}
		return self::$author;
	}

	public static function Book(): IModel {
		if ( self::$book === null ) {
			// TODO: assign a new instance to self::$book
		}
		return self::$book;
	}
}
