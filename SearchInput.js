export default function SearchInput({ $target, initialState, onChange }) {
  // &target is document.querySelector('.App');
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
      `;
  };

  this.render();

  // 이벤트 핸들러 구현 부분

  this.$element.addEventListener("keyup", (event) => {
    onChange(event.target.value);
  });
}
