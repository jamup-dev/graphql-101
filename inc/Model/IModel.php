<?php

namespace LGraphQL\Model;

interface IModel {
	public function __construct( array $data );

	public function findById( string $id ) : array;

	public function findByRelation( string $value, string $key ) : array;

	public function collection( int $first, string $after ) : array;
}
