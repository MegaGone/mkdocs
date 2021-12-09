import { Observable, Subject } from "rxjs"

import { Keyboard, Viewport } from "~/browser"
import { Component } from "~/components"
import {
  SearchIndex,
  SearchTransformFn
} from "~/integrations"

/* ----------------------------------------------------------------------------
 * Global types
 * ------------------------------------------------------------------------- */

/**
 * Global search configuration
 */
export interface GlobalSearchConfig {
  transform?: SearchTransformFn        /* Transformation function */
  index?: Promise<SearchIndex>         /* Alternate index */
  worker?: string                      /* Alternate worker URL */
}

/* ------------------------------------------------------------------------- */

declare global {

  /**
   * Global search configuration
   */
  const __search: GlobalSearchConfig | undefined

  /**
   * Fetch the value for a key from the given storage
   *
   * This function is defined in `partials/javascripts/base.html`, so it can be
   * used from the templates, as well as from the application bundle.
   *
   * @template T - Data type
   *
   * @param key - Key
   * @param storage - Storage (default: local storage)
   * @param base - Base URL (default: current base)
   *
   * @return Value or nothing
   */
  function __md_get<T>(
    key: string, storage?: Storage, base?: URL
  ): T | null

  /**
   * Persist a key-value pair in the given storage
   *
   * This function is defined in `partials/javascripts/base.html`, so it can be
   * used from the templates, as well as from the application bundle.
   *
   * @template T - Data type
   *
   * @param key - Key
   * @param value - Value
   * @param storage - Storage (default: local storage)
   * @param base - Base URL (default: current base)
   */
  function __md_set<T>(
    key: string, value: T, storage?: Storage, base?: URL
  ): void
}

/* ------------------------------------------------------------------------- */

/**
 * Google Analytics
 */
declare global {
  function ga(...args: string[]): void
}

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

declare global {
  var document$: Observable<Document>  /* Document observable */
  var location$: Subject<URL>          /* Location subject */
  var target$: Observable<HTMLElement> /* Location target observable */
  var keyboard$: Observable<Keyboard>  /* Keyboard observable */
  var viewport$: Observable<Viewport>  /* Viewport obsevable */
  var tablet$: Observable<boolean>     /* Media tablet observable */
  var screen$: Observable<boolean>     /* Media screen observable */
  var print$: Observable<boolean>      /* Media print observable */
  var alert$: Subject<string>          /* Alert subject */
  var component$: Observable<Component>/* Component observable */
}
