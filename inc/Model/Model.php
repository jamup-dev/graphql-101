<?php

namespace LGraphQL\Model;

class Model implements IModel {
	protected $data = [];

	protected $indexedKeys = [];

	protected function createIndexedKeys( array $data ) {
		$this->indexedKeys = [];
		foreach ( $data as $d ) {
			$this->indexedKeys[] = $d['id'];
		}
	}

	public function __construct( array $data ) {
		$this->data = $data;
	}

	public function findById( string $id ): array {

	}
}
